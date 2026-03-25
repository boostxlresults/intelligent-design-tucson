"use client";

import { useEffect } from "react";

/**
 * BlockScheduleEngineChat
 * 
 * The Schedule Engine WebChat (webchat.scheduleengine.net/webchat-v1.js) is being
 * loaded through Google Tag Manager (GTM-WKG99GJ). This creates a duplicate chat
 * widget that conflicts with our Broccoli AI chat.
 * 
 * This component blocks the WebChat from initializing by:
 * 1. Intercepting the WebChat.loadChat() call
 * 2. Removing any WebChat DOM elements that get injected
 * 3. Blocking the webchat script from loading
 * 
 * The Schedule Engine SCHEDULER (embed.scheduleengine.net/schedule-engine-v3.js)
 * is NOT affected - only the WebChat is blocked.
 * 
 * TODO: Remove the WebChat script tag from GTM for a cleaner permanent fix.
 */
export default function BlockScheduleEngineChat() {
  useEffect(() => {
    // 1. Prevent WebChat.loadChat from doing anything
    // Set up a trap before GTM can call it
    const originalDefineProperty = Object.defineProperty;
    
    // Intercept WebChat global
    if (typeof window !== "undefined") {
      // If WebChat already exists, neuter it
      if ((window as any).WebChat) {
        (window as any).WebChat.loadChat = () => {};
      }
      
      // Set a proxy to catch future assignments
      let _webChat: any = (window as any).WebChat || {};
      try {
        originalDefineProperty(window, "WebChat", {
          get() {
            return _webChat;
          },
          set(val) {
            _webChat = val;
            // Immediately override loadChat whenever WebChat is set
            if (_webChat && typeof _webChat === "object") {
              _webChat.loadChat = () => {
                // Blocked: Schedule Engine WebChat disabled in favor of Broccoli AI
              };
            }
          },
          configurable: true,
        });
      } catch {
        // If defineProperty fails (already defined), try direct override
        if ((window as any).WebChat) {
          (window as any).WebChat.loadChat = () => {};
        }
      }
    }

    // 2. Block the webchat script from loading via MutationObserver
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of Array.from(mutation.addedNodes)) {
          if (node instanceof HTMLScriptElement) {
            const src = node.src || node.getAttribute("data-gtmsrc") || "";
            if (src.includes("webchat.scheduleengine.net")) {
              node.remove();
            }
          }
          // Remove any WebChat UI elements
          if (node instanceof HTMLElement) {
            const id = node.id || "";
            const className = (typeof node.className === "string" ? node.className : "") || "";
            if (
              id.includes("se-webchat") ||
              id.includes("webchat-container") ||
              className.includes("se-webchat") ||
              className.includes("webchat-container")
            ) {
              node.remove();
            }
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    // 3. Periodic cleanup for any elements that slip through
    const cleanupIntervals = [500, 1000, 2000, 3000, 5000, 8000];
    const timeouts = cleanupIntervals.map((delay) =>
      setTimeout(() => {
        // Remove webchat script tags
        document
          .querySelectorAll('script[src*="webchat.scheduleengine.net"]')
          .forEach((el) => el.remove());
        
        // Remove webchat iframes
        document
          .querySelectorAll('iframe[src*="webchat.scheduleengine.net"]')
          .forEach((el) => el.remove());

        // Remove any elements with webchat-related IDs or classes
        document
          .querySelectorAll('[id*="webchat"], [class*="webchat"], [id*="se-webchat"], [class*="se-webchat"]')
          .forEach((el) => el.remove());

        // Re-override WebChat.loadChat in case it was re-assigned
        if ((window as any).WebChat && typeof (window as any).WebChat.loadChat === "function") {
          const originalLoadChat = (window as any).WebChat.loadChat;
          if (originalLoadChat.toString().includes("apiKey")) {
            (window as any).WebChat.loadChat = () => {};
          }
        }
      }, delay)
    );

    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return null;
}
