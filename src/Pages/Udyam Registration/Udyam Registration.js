import React, { useState } from 'react';
import './style.css';
import axios from 'axios'; // Import axios for making HTTP requests

const UdyamRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    aadhaar: '',
    businessName: '',
    businessType: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serverUrl = window.location.hostname === 'localhost' 
      ? 'http://localhost:3000/submit-udyam-registration' 
      : 'https://backend-one-snowy-88.vercel.app/submit-udyam-registration';
    try {
      const response = await axios.post(serverUrl, formData);
      console.log('Form Submitted', response.data);
      setSuccessMessage('Form submitted successfully! Our team will contact you soon. Thank you!');
      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        aadhaar: '',
        businessName: '',
        businessType: ''
      });
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="udyam-registration-page">
      <header className="page-header">
        <h1>Udyam Registration</h1>
        <p>
          Simplify your business registration process with Udyam Registration. 
          Unlock benefits and support for your Micro, Small, and Medium Enterprises (MSMEs).
        </p>
      </header>

      <section className="information-section">
        <h2>What is Udyam Registration?</h2>
        <p>
          Udyam Registration is a government-initiated process designed to ease the 
          registration of Micro, Small, and Medium Enterprises (MSMEs) in India. 
          This registration provides businesses with a unique Udyam Registration 
          Number, ensuring recognition and access to a wide range of benefits 
          provided by the Indian government.
        </p>
        <p>
          The Udyam Registration process is completely paperless and based on 
          self-declaration. It enables businesses to enjoy benefits such as 
          subsidies on loans, protection against delayed payments, and access 
          to government tenders reserved for MSMEs.
        </p>
        <p>
          This initiative not only promotes ease of doing business but also 
          ensures the growth and development of MSMEs, which are the backbone 
          of India's economy.
        </p>
        <p>
          All types of MSMEs, including manufacturing, service, and trading units, 
          can apply for Udyam Registration. The process requires minimal documentation, 
          making it accessible for small businesses across India.
        </p>
        <p>
          With Udyam Registration, businesses can achieve formal recognition, 
          improve credibility, and gain access to financial and non-financial benefits 
          to enhance their operations and market reach.
        </p>
      </section>

      <section className="image-grid-section">
        <h2>Benefits of Udyam Registration</h2>
        <div className="image-grid">
          <div className="image-box">
            <img src="https://images.pexels.com/photos/16131778/pexels-photo-16131778/free-photo-of-empty-prison-corridor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Government Benefits" />
            <p>Access to Government Subsidies</p>
          </div>
          <div className="image-box">
            <img src="https://images.pexels.com/photos/7821935/pexels-photo-7821935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Loan Subsidy" />
            <p>Subsidized Bank Loans</p>
          </div>
          <div className="image-box">
            <img src="https://images.pexels.com/photos/6077797/pexels-photo-6077797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Tenders" />
            <p>Exclusive Access to Tenders</p>
          </div>
          <div className="image-box">
            <img src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Tax Benefits" />
            <p>Tax Exemptions</p>
          </div>
        </div>
      </section>

      <section className="registration-form-section">
        <h2>Udyam Registration Form</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="aadhaar">Aadhaar Number</label>
            <input type="text" id="aadhaar" name="aadhaar" placeholder="Enter your Aadhaar number" value={formData.aadhaar} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="businessName">Business Name</label>
            <input type="text" id="businessName" name="businessName" placeholder="Enter your business name" value={formData.businessName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="businessType">Business Type</label>
            <select id="businessType" name="businessType" value={formData.businessType} onChange={handleChange} required>
              <option value="">Select your business type</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="service">Service</option>
              <option value="trading">Trading</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">Submit Registration</button>
        </form>
        {successMessage && (
          <p className="success-message" style={{ color: 'green', fontWeight: 'bold', fontSize: '24px', animation: 'flash 1s infinite' }}>
            {successMessage}
          </p>
        )}
      </section>
    </div>
  );
};

export default UdyamRegistration;
