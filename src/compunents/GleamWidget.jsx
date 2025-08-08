import { useEffect } from 'react';

const GleamWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.gleamjs.io/e.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      className="e-widget no-button text-[16px] font-[400] text-[#fff] hover:border-b-[#E5AE00] transition duration-300"
      href="https://gleam.io/OR72Q/blockchainfx-500000-giveaway"
      rel="nofollow"
    >
      {/* 🏆BlockchainFX $500,000 Giveaway!🚀 */}
      Win 500k
    </a>
  );
};

export default GleamWidget;
