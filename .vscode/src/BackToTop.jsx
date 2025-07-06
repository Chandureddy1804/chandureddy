import React from 'react';

function BackToTop() {
  React.useEffect(() => {
    const handleScroll = () => {
      const btn = document.querySelector('.back-to-top');
      if (btn) btn.style.display = window.scrollY > 200 ? 'block' : 'none';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="back-to-top" onClick={scrollToTop}>
      ↑
    </div>
  );
}

export default BackToTop;
