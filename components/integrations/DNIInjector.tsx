"use client";

export default function DNIInjector() {
  return (
    <>
      {/* TODO: Paste official ServiceTitan DNI script exactly as provided.
          The DNI (Dynamic Number Insertion) script will be inserted here.
          Contact ServiceTitan for your specific DNI snippet.
          
          Example placement:
          <script>
            // ServiceTitan DNI code will go here
          </script>
      */}
      <script
        id="servicetitan-dni"
        dangerouslySetInnerHTML={{
          __html: `
            /* Placeholder: Paste official ServiceTitan DNI code here */
            console.log('ServiceTitan DNI placeholder - awaiting official snippet');
          `
        }}
      />
    </>
  );
}
