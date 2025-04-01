import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="container-fluid">
        <div className="address-block">
          <div className="row text-center pt-5">
            <div className="col-md-4">
              <h2 className="up-color">Dubai</h2>
              <p className="up-color">
                <strong>Address</strong>
              </p>
              <p className="up-color">
                Office #202, Infinity Business Centre | Al Barsha Business
                Centre, Al Barsha 1,
                <br />
                PO Box 2769,
                <br />
                Dubai, UAE
              </p>
              <p>
                <a href="mailto:info@metamorfs.com" className="up-color">
                  Email
                </a>
                : info@metamorfs.com
              </p>
            </div>
            <div className="col-md-4">
              <h2 className="up-color">India</h2>
              <p className="up-color">
                <strong>Address</strong>
              </p>
              <p className="up-color">
                289-A,3rd Floor, DISHAA, 12th Cross, Ideal Home Township,
                Rajarajeshwari
                <br />
                Nagar, Mysore Road,
                <br />
                Bangalore – 560 098. INDIA
              </p>
              <p>
                <a href="mailto:info@metamorfs.com" className="up-color">
                  Email
                </a>
                : info@metamorfs.com
              </p>
            </div>
            <div className="col-md-4">
              <h2 className="up-color">United Kingdom
              </h2>
              <p className="up-color">
                <strong>Address</strong>
              </p>
              <p className="up-color">
              Suite 5, Stanley House, Stanley Avenue, Alperton Wembley Middlesex

                <br />
                HA0 4JB London
              </p>
              <p>
                <a href="mailto:info@metamorfs.com" className="up-color">
                  Email
                </a>
                : info@metamorfs.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-box">
          <h1>Talk with an expert</h1>
          <p>
            Request a call to find out how we can help transform your business.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
            <input
              type="text"
              placeholder="Company Name*"
              required
              className="full-width"
            />
            <input type="email" placeholder="Email*" required />
            <input type="tel" placeholder="Phone Number*" required />
            <select required className="full-width">
              <option value="">Country*</option>
              <option>Afghanistan</option>
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
            </select>
            <textarea
              placeholder="Message*"
              required
              className="full-width"
            ></textarea>
            <button type="submit" className="submit-button">
              Contact Me
            </button>
            <p>
              By clicking 'Contact Me' above, you acknowledge that METAMORFS
              will store and process the personal information submitted above to
              provide you the content requested and in the legitimate interests
              of Metamorf Group.
            </p>
            <div className="checkbox-label">
              <label>
                <input type="checkbox" />
              </label>
              <p className="chk-box-content">
                Yes, I would like to receive marketing communications regarding
                METAMORFS products, services, and events.
              </p>
            </div>
            <p>
              You may unsubscribe from these communications at any time. For
              more information on how to unsubscribe, our privacy practices, and
              how we are committed to protecting and respecting your privacy,
              please review our Privacy Notice.
            </p>
          </form>
          {/* <p className="disclaimer">
          By clicking 'Contact Me', you acknowledge that METAMORFS will store
          and process the personal information submitted above.
        </p> */}
        </div>
      </div>
    </>
  );
}

export default Contact;
