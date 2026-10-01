"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";

/**
 * BroccoliChat - lead-capture chat widget, loaded on intent only.
 *
 * INP history:
 *   - Originally injected on window "load". Mobile INP failed sitewide.
 *   - 2026-07-15: injected on the first user interaction or after 3.5s idle. INP
 *     recovered for about a month.
 *   - 2026-10-01: PageSpeed on a mobile blog URL showed the Broccoli widget at
 *     3,612 ms of CPU and 2,079 ms of long tasks, plus a PostHog session recorder
 *     it pulls in at another 1,280 ms. Injecting that on the first touch meant the
 *     visitor's first tap landed inside it, which is exactly what INP measures.
 *     Field INP p75 was 304 ms on the blog template, 375 ms on the homepage.
 *
 * Now: nothing from Broccoli loads until someone asks for chat. This component
 * renders a 2 KB look-alike bubble in the same spot. Tapping it (or the "Text Us"
 * button in the mobile bar) injects the real widget, waits for its button, opens
 * it, and removes the stand-in. Visitors who never open chat, which is nearly all
 * of them, never download or execute any of it.
 *
 * Nothing here touches rendered page content, so there is no SEO effect.
 */
const BROCCOLI_SRC = "https://cdn.broccoli.com/script.js";
const BROCCOLI_DATA_ID = "d9cc73ef-3d59-4cfa-968f-b26e6ab24416";
const WIDGET_BUTTON_ID = "broccoli-chat-widget-button";
const WIDGET_CONTAINER_ID = "broccoli-chat-widget-container";

type Status = "idle" | "loading" | "ready";

declare global {
  interface Window {
    __idBroccoliLoad?: (openWhenReady?: boolean) => void;
  }
}

function findWidgetButton(): HTMLElement | null {
  return (
    (document.getElementById(WIDGET_BUTTON_ID) as HTMLElement | null) ||
    (document.querySelector(`#${WIDGET_CONTAINER_ID} button`) as HTMLElement | null)
  );
}

export default function BroccoliChat() {
  const [status, setStatus] = useState<Status>("idle");
  const statusRef = useRef<Status>("idle");
  const openRequested = useRef(false);
  const observerRef = useRef<MutationObserver | null>(null);

  const attachOpenStateObserver = useCallback(() => {
    if (observerRef.current) return true;
    const container = document.getElementById(WIDGET_CONTAINER_ID);
    const iframeContainer = container?.querySelector("div") as HTMLElement | null;
    if (!iframeContainer) return false;
    const observer = new MutationObserver(() => {
      const isOpen = iframeContainer.style.display === "block";
      document.body.classList.toggle("broccoli-chat-open", isOpen);
    });
    observer.observe(iframeContainer, { attributes: true, attributeFilter: ["style"] });
    observerRef.current = observer;
    return true;
  }, []);

  const load = useCallback(
    (openWhenReady = true) => {
      if (openWhenReady) openRequested.current = true;
      if (statusRef.current !== "idle") {
        // Already loading or loaded; honor a late open request.
        if (statusRef.current === "ready" && openWhenReady) findWidgetButton()?.click();
        return;
      }
      statusRef.current = "loading";
      setStatus("loading");

      if (!document.getElementById("broccoli-chat")) {
        const s = document.createElement("script");
        s.id = "broccoli-chat";
        s.src = BROCCOLI_SRC;
        s.async = true;
        s.setAttribute("data-id", BROCCOLI_DATA_ID);
        document.body.appendChild(s);
      }

      // Wait for the real widget button, then open it and retire the stand-in.
      let attempts = 0;
      const timer = setInterval(() => {
        attempts += 1;
        const btn = findWidgetButton();
        if (btn) {
          clearInterval(timer);
          attachOpenStateObserver();
          statusRef.current = "ready";
          setStatus("ready");
          if (openRequested.current) {
            openRequested.current = false;
            btn.click();
          }
        } else if (attempts >= 60) {
          // 15s without a widget: give the visitor the bubble back rather than a dead corner.
          clearInterval(timer);
          statusRef.current = "idle";
          setStatus("idle");
        }
      }, 250);
    },
    [attachOpenStateObserver]
  );

  useEffect(() => {
    window.__idBroccoliLoad = load;
    return () => {
      if (window.__idBroccoliLoad === load) delete window.__idBroccoliLoad;
      observerRef.current?.disconnect();
      observerRef.current = null;
      document.body.classList.remove("broccoli-chat-open");
    };
  }, [load]);

  if (status === "ready") return null;

  return (
    <button
      type="button"
      onClick={() => load(true)}
      aria-label="Chat with us"
      aria-busy={status === "loading"}
      data-testid="button-chat-standin"
      className="broccoli-standin fixed right-3 z-[10000] inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/70"
      style={{ bottom: "var(--chat-standin-bottom, 20px)" }}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {status === "loading" ? "Opening..." : "Chat"}
    </button>
  );
}
