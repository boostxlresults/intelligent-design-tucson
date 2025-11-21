"use client";

export default function HatchChat() {
  return (
    <script
      id="hatch-chat"
      dangerouslySetInnerHTML={{
        __html: `
          function _loadHatchScripts(t){try{var e=document,n=e.createElement("script");n.src=t,n.async=!0,n.defer=!0,n.dataset.hatchid="67f38a719fd92e00011a4e43";var a=e.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a)}catch(t){}}window.addEventListener("WebComponentsReady",function(){_loadHatchScripts("https://hatch-javascript.s3.amazonaws.com/hatchChat-app.js")}),"attachShadow"in Element.prototype?document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0})):_loadHatchScripts("https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/webcomponents-bundle.js");
        `
      }}
    />
  );
}
