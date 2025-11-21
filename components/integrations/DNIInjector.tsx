"use client";

export default function DNIInjector() {
  return (
    <>
      <script
        id="servicetitan-dni"
        dangerouslySetInnerHTML={{
          __html: `
            dni = (function(q,w,e,r,t,y,u){q['ServiceTitanDniObject']=t;q[t]=q[t]||function(){
                (q[t].q=q[t].q||[]).push(arguments)};q[t].l=1*new Date();y=w.createElement(e);
                u=w.getElementsByTagName(e)[0];y.async=true;y.src=r;u.parentNode.insertBefore(y,u);
                return q[t];
            })(window,document,'script','https://static.servicetitan.com/marketing-ads/dni.js','dni');
            dni('init', '227669022');
            document.addEventListener('DOMContentLoaded', function() { dni('load'); }, false);
          `
        }}
      />
    </>
  );
}
