"use client";

import { useState, useEffect } from "react";
import { List, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TOCItem } from "./TableOfContents";

interface FloatingTOCButtonProps {
  items: TOCItem[];
  triggerElementId?: string;
}

export default function FloatingTOCButton({ 
  items,
  triggerElementId = "toc-trigger-point"
}: FloatingTOCButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerElement = document.getElementById(triggerElementId);
      if (triggerElement) {
        const rect = triggerElement.getBoundingClientRect();
        setIsVisible(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerElementId]);

  const handleJump = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed z-50 flex items-center justify-center",
          "w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg",
          "bg-blue-600 hover:bg-blue-700 text-white",
          "transition-all duration-300 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          "bottom-24 left-4 md:bottom-8 md:left-8",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
        aria-label={isOpen ? "Close table of contents" : "Open table of contents"}
        data-testid="button-floating-toc"
      >
        {isOpen ? (
          <X className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <List className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>

      {/* Popup Panel */}
      <div
        className={cn(
          "fixed z-40 bg-white rounded-lg shadow-2xl border border-gray-200",
          "transition-all duration-300 ease-in-out",
          "bottom-40 left-4 md:bottom-24 md:left-8",
          "w-[calc(100vw-2rem)] max-w-sm md:max-w-md",
          "max-h-[60vh] overflow-y-auto",
          isOpen && isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
        data-testid="panel-floating-toc"
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3">
          <h3 className="font-bold text-gray-900 flex items-center gap-2">
            <List className="w-5 h-5 text-blue-600" />
            Jump to Section
          </h3>
        </div>
        <ul className="p-3 space-y-1">
          {items.map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => handleJump(item.id)}
                className={cn(
                  "w-full text-left px-3 py-2.5 rounded-md text-sm transition-colors",
                  "hover:bg-blue-50 hover:text-blue-700",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
                  "flex items-center gap-2"
                )}
                data-testid={`link-floating-toc-${index}`}
              >
                <span className="text-blue-500 font-medium min-w-[1.5rem]">{index + 1}.</span>
                <span className="line-clamp-2">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && isVisible && (
        <div 
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
