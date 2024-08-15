import React from "react";
import './newsletter.css'

const Newsletter = () => {
  return (
    <div>
      <div className="subscribe-section">
        <h2>Subscribe to our Events Newsletter</h2>
        <p>Receive events you actually want to attend in your inbox.</p>
        <a href="./contact.html" className="subscribe-button">
          Subscribe
        </a>
      </div>
    </div>
  );
};

export default Newsletter;
