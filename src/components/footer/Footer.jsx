import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="./about">About Us</a>
            </li>
            <li>
              <a href="./services">Our Services</a>
            </li>
            <li>
              <a href="./faq">FAQ</a>
            </li>
            <li>
              <a href="./contact">Get Help</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li>
              <a href="#">Cashless Payments</a>
            </li>
            <li>
              <a href="#">Ticketing</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Payment Options</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Refunds Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
      <div className="footer-copyright">
        <p>&copy; 2024 Rauch007. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
