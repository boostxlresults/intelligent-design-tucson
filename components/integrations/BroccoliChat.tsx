"use client";

import Script from "next/script";

export default function BroccoliChat() {
  return (
    <Script
      id="broccoli-chat"
      src="https://cdn.broccoli.com/script.js"
      data-id="d9cc73ef-3d59-4cfa-968f-b26e6ab24416"
      strategy="lazyOnload"
    />
  );
}
