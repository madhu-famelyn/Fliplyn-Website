import React, { useRef } from "react";
import "./KanchiOrder.css";
import TempleMenu from "./Menu";

import bgImage from "../../../assets/hero-temple.jpg";
import logo from "../../../assets/KanchiLogo.png";
import fliplynLogo from "../../../assets/logo.svg";

const HeroSection = () => {

  // ⭐ create reference for menu
  const menuRef = useRef(null);

  // ⭐ smooth scroll function
  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="kanchi-hero-container">

        {/* Background */}
        <div
          className="kanchi-bg-zoom"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        <div className="kanchi-overlay" />

        {/* ===== TOP BAR ===== */}
        <div className="kanchi-topbar">

          <div className="kanchi-brand">
            <img
              src={logo}
              alt="Kanchi Cafe"
              className="kanchi-brand-logo"
            />
          </div>

          <div className="kanchi-powered">
            <img
              src={fliplynLogo}
              alt="Fliplyn"
              className="kanchi-powered-logo"
            />
            <span>Powered by Fliplyn</span>
          </div>

        </div>

        {/* ===== HERO CONTENT ===== */}
        <div className="kanchi-hero-content">

          <h1 className="kanchi-title">
            KANCHI CAFE
          </h1>

          <div className="kanchi-divider" />

          <h2 className="kanchi-tagline">
            A Cafe Where South Indian Rituals Live On.
          </h2>

          <p className="kanchi-subtext">
            Where every aroma tells a story, every meal honors tradition,
            and every visit feels like coming home to heritage.
          </p>

          {/* ⭐ UPDATED BUTTON */}
          <button
            className="kanchi-btn"
            onClick={scrollToMenu}
          >
            VIEW MENU
          </button>

        </div>

      </section>

      {/* ⭐ Attach ref here */}
      <div ref={menuRef}>
        <TempleMenu />
      </div>
    </>
  );
};

export default HeroSection;
