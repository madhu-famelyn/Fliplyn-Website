import React from "react";
import Header from "../HeroSection/header";
import "./PolicyReviewPage.css";

const PolicyReview = () => {
  return (
    <>
      <Header />

      <div className="policy-container">
        <h1 className="policy-title">Review your policy pages</h1>
        <p className="policy-subtitle">
          We’ve created these using your given details
        </p>

        {/* Terms & Conditions */}
        <section className="policy-section">
          <h2>Terms & Conditions</h2>

          <p>
            For the purpose of these Terms and Conditions, the term "we", "us",
            "our" shall mean NEOS GROUP, located at 3rd floor, above Bata
            showroom, Madhapur, Hyderabad, Telangana 500081.
          </p>

          <p>
            Your use of this website and/or purchase from us are governed by the
            following Terms and Conditions. Content may change without notice.
          </p>

          <p>
            We do not guarantee accuracy or completeness of information and are
            not liable for errors to the fullest extent permitted by law.
          </p>

          <p>
            Your use of any materials or products is entirely at your own risk.
          </p>

          <p>
            All content including design and graphics are owned or licensed to
            us. Unauthorized reproduction is prohibited.
          </p>

          <p>
            Any dispute is subject to the laws of India.
          </p>

          <p>
            We are not liable for failed transactions due to card limits or bank
            issues.
          </p>
        </section>

        {/* Cancellation & Refund Policy */}
        <section className="policy-section">
          <h2>Cancellation & Refund Policy</h2>

          <p>
            NEOS GROUP follows a customer-friendly cancellation policy.
          </p>

          <p>
            Cancellations are accepted within 1–2 days of order placement.
          </p>

          <p>
            Perishable goods like food items are not eligible for cancellation.
          </p>

          <p>
            Defective items must be reported within 1–2 days for verification.
          </p>

          <p>
            Manufacturer warranty issues should be handled directly with the
            manufacturer.
          </p>

          <p>
            Approved refunds are processed within 1–2 days.
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="policy-section">
          <h2>Privacy Policy</h2>

          <p>
            NEOS GROUP is committed to protecting your privacy and personal
            data.
          </p>

          <p>
            We may collect personal details such as name, contact info, and
            preferences.
          </p>

          <p>
            This information is used for improving services, marketing, and user
            experience.
          </p>

          <p>
            We implement security measures to protect your data.
          </p>

          <p>
            You can contact us anytime to control your data usage at
            team@neosbiryani.com.
          </p>
        </section>

        {/* Shipping Policy */}
        <section className="policy-section">
          <h2>Shipping Policy</h2>

          <p>
            Orders are shipped via registered courier services or Speed Post.
          </p>

          <p>
            Orders are processed within 1–2 days unless otherwise specified.
          </p>

          <p>
            We are not responsible for delays caused by courier services.
          </p>

          <p>
            Delivery confirmation will be sent via email.
          </p>

          <p>
            Contact support: 9100540053 | team@neosbiryani.com
          </p>
        </section>

        {/* Contact Information */}
        <section className="policy-section">
          <h2>Contact Information</h2>

          <p>
            <strong>Merchant Legal Entity:</strong> NEOS GROUP <br />
            <strong>Registered Address:</strong> 3rd floor, above Bata showroom,
            Madhapur, Hyderabad, Telangana 500081 <br />
            <strong>Operational Address:</strong> Same as above <br />
            <strong>Phone:</strong> 9100540053 <br />
            <strong>Email:</strong> team@neosbiryani.com
          </p>
        </section>
      </div>
    </>
  );
};

export default PolicyReview;