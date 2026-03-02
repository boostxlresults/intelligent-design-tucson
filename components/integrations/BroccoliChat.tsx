"use client";

import Script from "next/script";

export default function BroccoliChat() {
  return (
    <Script
      id="broccoli-chat"
      src="https://cdn.broccoli.com/script.js"
      data-id={process.env.NEXT_PUBLIC_BROCCOLI_CHAT_ID || ""}
      strategy="lazyOnload"
    />
  );
}
