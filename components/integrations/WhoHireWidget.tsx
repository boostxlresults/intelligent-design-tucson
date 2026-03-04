'use client';

import { useEffect } from 'react';

export default function WhoHireWidget() {
  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.getElementById('whohire-script');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'whohire-script';
      script.src = 'https://plugin.whohire.com';
      script.async = true;
      document.body.appendChild(script);
    }

    // Cleanup function
    return () => {
      const script = document.getElementById('whohire-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="my-8 min-h-[400px]">
      <div 
        id="hirewho-plugin" 
        data-slug="intelligentdesignairconditioningplumbingroofingsolarelectric"
        data-testid="whohire-widget"
      />
    </div>
  );
}
