import React, { useState } from "react";
import "./style.css";
import axios from 'axios'; // Import axios for making HTTP requests

const ProfessionalTaxRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/submit-professional-tax-registration', {
        name,
        email,
        phone,
        message
      });
      console.log('Form Submitted', response.data);
      setSuccessMessage('Form submitted successfully! Our team will contact you soon. Thank you!');
      // Clear the form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="professional-tax-page">
      {/* Slider Section */}
      <section className="slider-section">
        <div className="slider">
          <div className="slide">
            <h1>Professional Tax Registration</h1>
            <p>Ensure compliance with state laws and avoid penalties by registering for Professional Tax today!</p>
          </div>
          <div className="slide">
            <h1>Why Choose Us?</h1>
            <p>Fast, reliable, and professional services tailored to your needs.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Professional Tax Registration</h2>
        <p>
          Professional Tax is a state-level tax imposed on professionals, trades, and employment. It is mandatory for employers and self-employed individuals to register and pay professional tax in states where it is applicable.
        </p>
        <h3>Key Features:</h3>
        <ul>
          <li>Mandatory for employees earning above a certain threshold.</li>
          <li>Applicable to businesses, professionals, and employers.</li>
          <li>Non-compliance can result in penalties.</li>
        </ul>
      </section>

      {/* Grid Section */}
      <section className="grid-section">
        <h2>Our Services</h2>
        <div className="grid-container">
          <div className="grid-box">
            <h3>Registration Assistance</h3>
            <p>Complete assistance for your Professional Tax Registration process.</p>
          </div>
          <div className="grid-box">
            <h3>Document Preparation</h3>
            <p>We help you prepare and file all necessary documents.</p>
          </div>
          <div className="grid-box">
            <h3>Compliance Check</h3>
            <p>Ensure your business complies with state regulations.</p>
          </div>
          <div className="grid-box">
            <h3>Affordable Pricing</h3>
            <p>Professional services at budget-friendly costs.</p>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="reviews-section">
        <h2>What Our Clients Say</h2>
        <div className="reviews-slider">
          <div className="review">
            <p>"The process was seamless and quick. Highly recommended!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="review">
            <p>"Exceptional service and support throughout the process."</p>
            <h4>- Sarah Smith</h4>
          </div>
          <div className="review">
            <p>"Affordable and reliable. I would use their services again."</p>
            <h4>- Raj Patel</h4>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="image-section">
        <h2>Gallery</h2>
        <div className="image-grid">
          <img src="image1.jpg" alt="Professional Tax" />
          <img src="image2.jpg" alt="Registration Process" />
          <img src="image3.jpg" alt="Client Meeting" />
          <img src="image4.jpg" alt="Compliance" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              placeholder="How can we help you?"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
        {successMessage && (
          <p className="success-message" style={{ color: 'red', fontWeight: 'bold', fontSize: '24px', animation: 'flash 1s infinite' }}>
            {successMessage}
          </p>
        )} {/* Display success message */}
      </section>
    </div>
  );
};

export default ProfessionalTaxRegistration;
