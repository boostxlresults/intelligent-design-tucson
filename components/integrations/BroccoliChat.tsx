"use client";

import { useEffect } from "react";

/**
 * BroccoliChat — lead-capture chat widget.
 *
 * INP optimization: instead of loading on window "load", the script is injected on
 * the FIRST user interaction (pointer / touch / scroll / key / mousemove) or after a
 * 3.5s idle fallback, whichever comes first. The chat is available to every visitor
 * within a few seconds — and instantly for anyone who engages — while its main-thread
 * cost is removed from the critical load window Google\'s INP metric penalizes.
 * Conversions preserved: the chat still appears on every page.
 */
const BROCCOLI_SRC = "https://cdn.broccoli.com/script.js";
const BROCCOLI_DATA_ID = "d9cc73ef-3d59-4cfa-968f-b26e6ab24416";

export default function BroccoliChat() {
  useEffect(() => {
    let injected = false;
    let idleTimer: ReturnType<typeof setTimeout>;
    const triggers = ["pointerdown", "touchstart", "keydown", "scroll", "mousemove"];

    const removeTriggers = () => {
      triggers.forEach((e) => window.removeEventListener(e, inject));
      clearTimeout(idleTimer);
    };

    const inject = () => {
      if (injected) return;
      injected = true;
      removeTriggers();
      if (document.getElementById("broccoli-chat")) return;
      const s = document.createElement("script");
      s.id = "broccoli-chat";
      s.src = BROCCOLI_SRC;
      s.async = true;
      s.setAttribute("data-id", BROCCOLI_DATA_ID);
      document.body.appendChild(s);
    };

    triggers.forEach((e) => window.addEventListener(e, inject, { once: true, passive: true }));
    idleTimer = setTimeout(inject, 3500);

    // Toggle a body class when the chat opens/closes so the mobile action bar hides.
    let observer: MutationObserver | null = null;
    const attachObserver = () => {
      const container = document.getElementById("broccoli-chat-widget-container");
      if (!container) return false;
      const iframeContainer = container.querySelector("div");
      if (!iframeContainer) return false;
      observer = new MutationObserver(() => {
        const isOpen = (iframeContainer as HTMLElement).style.display === "block";
        document.body.classList.toggle("broccoli-chat-open", isOpen);
      });
      observer.observe(iframeContainer, { attributes: true, attributeFilter: ["style"] });
      return true;
    };
    const pollTimers = [1000, 2000, 3000, 5000, 8000, 12000].map((delay) =>
      setTimeout(() => {
        if (!observer) attachObserver();
      }, delay)
    );

    return () => {
      removeTriggers();
      pollTimers.forEach(clearTimeout);
      observer?.disconnect();
      document.body.classList.remove("broccoli-chat-open");
    };
  }, []);

  return null;
}
