import "../styles/globals.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-left">
            <div className="newsletter-section">
              <h4>BE THE FIRST TO KNOW</h4>
              <p>Sign up for updates from mettā muse.</p>
              <div className="subscribe-form">
                <input 
                  type="email" 
                  placeholder="Enter your e-mail..." 
                  aria-label="Email address"
                />
                <button type="submit">SUBSCRIBE</button>
              </div>
            </div>
          </div>

          <div className="footer-right">
            <div className="contact-section">
              <h4>CONTACT US</h4>
              <div className="contact-info">
                <div>+44 221 133 5360</div>
                <div>
                  <a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a>
                </div>
              </div>
              
              <div className="currency-section">
                <h4>CURRENCY</h4>
                <div className="currency-selector">
                  <span className="currency-flag">🇺🇸</span>
                  <span>USD</span>
                </div>
                <p className="currency-note">
                  Transactions will be completed in Euros and a currency reference is available on hover.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-links">
            <div className="links-section">
              <div className="brand-section">
                <h4>mettā muse</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Stories</a></li>
                  <li><a href="#">Artisans</a></li>
                  <li><a href="#">Boutiques</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">EU Compliances Docs</a></li>
                </ul>
              </div>
            </div>

            <div className="links-section">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><a href="#">Orders & Shipping</a></li>
                <li><a href="#">Join/Login as a Seller</a></li>
                <li><a href="#">Payment & Pricing</a></li>
                <li><a href="#">Return & Refunds</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>

            <div className="links-section">
              <div className="social-section">
                <h4>FOLLOW US</h4>
                <div className="social-icons">
                  <a href="#" aria-label="Instagram">📷</a>
                  <a href="#" aria-label="LinkedIn">💼</a>
                </div>
              </div>

              <div className="payment-section">
                <h4>mettā muse ACCEPTS</h4>
                <div className="payment-icons">
                  <div className="payment-icon">💳</div>
                  <div className="payment-icon">💳</div>
                  <div className="payment-icon">💳</div>
                  <div className="payment-icon">💳</div>
                  <div className="payment-icon">💳</div>
                  <div className="payment-icon">💳</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
