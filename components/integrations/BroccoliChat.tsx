"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function BroccoliChat() {
  useEffect(() => {
    /**
     * Toggle `broccoli-chat-open` on <body> whenever the Broccoli full-screen
     * chat opens or closes on mobile. This class is used by globals.css to hide
     * the floating action bar while the chat is open, so the iframe gets the
     * full screen height and doesn't feel clipped or unresponsive.
     *
     * Broccoli opens/closes by toggling display:block / display:none on the
     * iframe container div. We watch for that via MutationObserver.
     */
    let observer: MutationObserver | null = null;

    const attachObserver = () => {
      const container = document.getElementById("broccoli-chat-widget-container");
      if (!container) return false;

      // The iframe container is the first child div of the widget container
      const iframeContainer = container.querySelector("div");
      if (!iframeContainer) return false;

      observer = new MutationObserver(() => {
        const isOpen = (iframeContainer as HTMLElement).style.display === "block";
        document.body.classList.toggle("broccoli-chat-open", isOpen);
      });

      observer.observe(iframeContainer, {
        attributes: true,
        attributeFilter: ["style"],
      });

      return true;
    };

    // Broccoli loads lazily — poll until the widget container appears
    const intervals = [500, 1000, 2000, 3000, 5000, 8000];
    const timers = intervals.map((delay) =>
      setTimeout(() => {
        if (!observer) attachObserver();
      }, delay)
    );

    return () => {
      timers.forEach(clearTimeout);
      observer?.disconnect();
      document.body.classList.remove("broccoli-chat-open");
    };
  }, []);

  return (
    <Script
      id="broccoli-chat"
      src="https://cdn.broccoli.com/script.js"
      data-id="d9cc73ef-3d59-4cfa-968f-b26e6ab24416"
      strategy="lazyOnload"
    />
  );
}
