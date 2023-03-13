import { useEffect } from 'react';

function LandingPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.typeformEmbed !== 'undefined') {
      const typeformEmbed = window.typeformEmbed.makeWidget(
        'hgQLQxac',
        {
          mode: 'popup',
          autoOpen: true,
          hideHeaders: true,
          hideFooters: true,
          onSubmit: function() {
            console.log('Typeform submitted');
          }
        }
      );
    } else {
      console.error('Typeform SDK not loaded.');
    }
  }, []);

  return (
    <div className="landing-page">
      <div className="typeform-container" id="typeform-container"></div>
    </div>
  );
}

export default LandingPage;
