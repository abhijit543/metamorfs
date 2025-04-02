import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import swal from "sweetalert";
function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendDetails = (e) => {
    e.preventDefault();

    // Validate all fields are filled
    if (!formData.firstName || !formData.lastName || !formData.companyName || !formData.email || !formData.phone || !formData.country || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // EmailJS expects an object with the exact template variables
    const emailParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      company_name: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs.send("service_862nhrr", "template_qzm4la3", emailParams, "lszWWLLrkCYWnaXsL").then(
      (response) => {
        console.log(response);
        swal("Save Success", "Message sent successfully!", "success");
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });
      },
      (error) => {
        console.error("EmailJS Error:", error);
        swal("Error", "Failed to send message. Please try again.", "error");
      }
    );
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Talk with an expert</h1>
        <p>Request a call to find out how we can help transform your business.</p>
        <form className="contact-form" onSubmit={sendDetails}>
          <input type="text" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleChange} required />
          <input type="text" name="companyName" placeholder="Company Name*" value={formData.companyName} onChange={handleChange} required className="full-width" />
          <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleChange} required />
          <select name="country" value={formData.country} onChange={handleChange} required className="full-width">
            <option value="">Country*</option>
            <option>Afghanistan</option>
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
          </select>
          <textarea name="message" placeholder="Message*" value={formData.message} onChange={handleChange} required className="full-width"></textarea>
          <button type="submit" className="submit-button">
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
