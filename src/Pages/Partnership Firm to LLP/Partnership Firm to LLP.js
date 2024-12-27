import React from "react";
import Slider from "react-slick";
import "./style.css"; // Import your CSS file

const PartnershipFirmToLLP = () => {
  // Slider settings for key benefits
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="partnership-to-llp-container">
      {/* Page Header */}
      <header className="page-header">
        <h1>Partnership Firm to LLP Conversion</h1>
        <p>
          Converting a Partnership Firm to a Limited Liability Partnership
          (LLP) is a strategic move that offers flexibility, limited liability,
          and enhanced credibility. Learn how this conversion can benefit your
          business.
        </p>
      </header>

      {/* Information Section */}
      <section className="info-section">
        <h2>What is LLP?</h2>
        <p>
          An LLP, or Limited Liability Partnership, combines the benefits of a
          partnership and a company. It provides limited liability to its
          partners, meaning their personal assets are protected against business
          liabilities. LLPs also enjoy operational flexibility and are governed
          by the LLP Act, 2008.
        </p>
        <h2>Why Convert a Partnership Firm to an LLP?</h2>
        <p>
          Converting to an LLP allows businesses to benefit from limited
          liability protection, separate legal entity status, and better
          management of operations. LLPs are also tax-efficient and provide a
          professional image to attract clients and investors.
        </p>
      </section>

      {/* Slider Boxes */}
      <section className="slider-section">
        <h2>Key Benefits of LLP</h2>
        <Slider {...sliderSettings} className="benefits-slider">
          <div className="slider-box">
            <h3>Limited Liability</h3>
            <p>
              Partners' personal assets are safeguarded from business debts and
              liabilities.
            </p>
          </div>
          <div className="slider-box">
            <h3>Separate Legal Entity</h3>
            <p>
              An LLP is a distinct legal entity, separate from its partners.
            </p>
          </div>
          <div className="slider-box">
            <h3>Operational Flexibility</h3>
            <p>
              LLPs have fewer compliance requirements compared to companies.
            </p>
          </div>
          <div className="slider-box">
            <h3>Tax Advantages</h3>
            <p>
              LLPs enjoy tax benefits, including no dividend distribution tax.
            </p>
          </div>
        </Slider>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Contact Us for Assistance</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Write your message"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default PartnershipFirmToLLP;