import React from 'react';

function SocialIcons() {
  return (
    <section>
      <h2><i className="	fas fa-bell"></i> My Contact Details</h2>
      <div className="social-icons">
        <a href="mailto:chandureddydhushetty@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i> Mail
        </a>
        <a href="tel:+917095297048" title="Call">
          <i className="fas fa-phone"></i> Call
        </a>
        <a
          href="https://www.linkedin.com/in/dhushetty-chandrashekhar-reddy-630263368"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </section>
  );
}

export default SocialIcons;
