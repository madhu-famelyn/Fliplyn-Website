import React from "react";
import "./OrderPage.css";
import Header from "../Home/sections/HeroSection/header";
import ActiveEventsPage from "./ActiveEvents/ActiveEvents";

const OrderPage = () => {
  const handleFliplynClick = () => {
    window.location.href = "https://fliplyn-user.pages.dev/";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/918125154931";
  };

  return (
    <>
      <Header />

      <div className="order-page">
        <h2 className="order-title">Order Food From Food Court</h2>

        <p className="order-description">
          Skip the queue. Order from your seat.
        </p>

        <div className="order-buttons">
          <button className="order-btn" onClick={handleFliplynClick}>
            Order on Fliplyn App
          </button>

          <button
            className="order-btn whatsapp"
            onClick={handleWhatsAppClick}
          >
            Order via WhatsApp
          </button>
        </div>
      </div>

      {/* ✅ ACTIVE EVENTS SECTION */}
      <ActiveEventsPage />

    </>
  );
};

export default OrderPage;
