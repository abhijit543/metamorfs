import React from "react";
import "./Footer.css"; // Optional for extra styling

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 ">
      <div className="container">
        <div className="row">
          {/* My Account */}
          <div className="col-md-3">
            <h5 className="fw-bold">MY ACCOUNT</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Order History
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Wish List (0)
                </a>
              </li>
            </ul>
          </div>

          {/* Extras */}
          <div className="col-md-3">
            <h5 className="fw-bold">EXTRAS</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Manufacturers
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Specials
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-md-3">
            <h5 className="fw-bold">INFORMATION</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3">
            <h5 className="fw-bold">CUSTOMER SERVICE</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Site Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="bg-light" />
        <div className="d-flex justify-content-between">
          <p>Copyright © 1996 - 2025. All rights reserved.</p>
          <div>
            <img src="paypal.png" alt="PayPal" width="80" />
            <img src="visa.png" alt="Visa" width="60" />
            <img src="mastercard.png" alt="MasterCard" width="60" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
