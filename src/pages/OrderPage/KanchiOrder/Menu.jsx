import React from "react";
import "./Menu.css";

import backgroundImage from "../../../assets/hero-banner.jpg";
import thalli from "../../../assets/signature-thali.jpg";

export const menuData = [
  {
    category: "IDLI & TIFFIN",
    items: [
      ["Idly (3)", 55],
      ["Ghee Podi Idly", 109],
      ["Kanchi Rava Idly", 59],
      ["Kanchi Ghee Podi Rava Idly", 99],
      ["Plain Thatte Idly", 59],
      ["Ghee Thatte Idly", 99],
      ["Butter Thatte Idly", 99],
      ["Ghee Podi Thatte Idly", 109],
      ["Ghee Sambar Button Idly", 119],
      ["Kaara Bath (Upma)", 79],
      ["Ghee Khara Bath (Upma)", 99],
      ["Ghee Pongal", 129],
      ["Poori Masala", 109],
      ["Chole Bhature (4PM onwards)", 169],
    ],
  },

  {
    category: "VADA",
    items: [
      ["Medhu Vada (2)", 89],
      ["Ghee Sambar Vada", 99],
      ["Masala Vada", 89],
    ],
  },

  {
    category: "DOSA",
    items: [
      ["Plain Paper Dosa", 109],
      ["Ghee Plain Dosa", 119],
      ["Ghee Podi Dosa", 139],
      ["Paper Ghee Roast (Topi Dosa)", 109],
      ["Onion Dosa", 129],
      ["Ragi Dosa", 119],
      ["Multigrain Dosa", 129],
      ["Kal Dosa Vada Curry", 149],
      ["Garlic Roast Dosa", 159],
      ["Chitti Pesarattu", 159],
      ["Onion Uthappam", 129],
      ["Rava Dosa", 139],
      ["Rava Onion Dosa", 159],
      ["Rava Onion Podi Masala Dosa", 169],
      ["Ghee Podi Masala Dosa", 159],
      ["Open Butter Masala Dosa", 169],
      ["Mysore Masala Dosa", 179],
      ["Family Dosa", 259],
    ],
  },

  {
    category: "PAROTTA (9AM onwards)",
    items: [
      ["Bun Parotta", 109],
      ["Malabar Parotta", 129],
      ["Cylone Parotta", 149],
      ["Chapatti Kurma", 99],
    ],
  },

  {
    category: "SNACKS",
    items: [
      ["Mirchi Bajji", 79],
      ["Mysore Bonda", 89],
      ["Onion Pakoda", 79],
      ["Punugulu", 79],
    ],
  },

  {
    category: "VARIETY RICE",
    items: [
      ["Temple Pulihora", 109],
      ["Bisebillabath / Sambar Rice", 109],
      ["Lemon Rice", 89],
      ["Veg Biriyani", 129],
      ["Curd Rice", 109],
    ],
  },

  {
    category: "RICE COMBO",
    items: [
      ["Combo 1 — Lemon Rice + Curd Rice", 139],
      ["Combo 2 — Veg Biryani + Curd Rice", 139],
      ["Combo 3 — Sambar Rice + Curd Rice", 139],
    ],
  },

  {
    category: "TIFFIN COMBO",
    items: [
      ["Thatte Idly + Vada", 99],
      ["Thatte Idly + Vada + Coffee", 129],
    ],
  },

  {
    category: "KANCHI THALI",
    items: [
      ["Weekday Thali (Mon–Fri 12PM–3PM)", 229],
      ["Weekend Thali (Sat–Sun 12PM–3PM)", 279],
    ],
  },

  {
    category: "SWEETS",
    items: [
      ["Carrot Halwa", 99],
      ["Chakkara Pongal", 99],
      ["Elaneer Payasam", 129],
      ["Kesari Bhath", 79],
    ],
  },

  {
    category: "FRESH JUICES",
    items: [
      ["Lemon Juice", 69],
      ["Grape Lemon", 119],
      ["Grape Pure", 109],
      ["Pineapple Pure", 129],
      ["Mosambi Pure", 159],
      ["Orange Pure", 169],
      ["Musk Melon Pure", 129],
      ["Lime Mint Cooler", 99],
      ["Watermelon Mint", 159],
      ["Pomegranate Mint", 189],
    ],
  },

  {
    category: "LASSI",
    items: [
      ["Matka Lassi", 129],
      ["Rose Matka Lassi", 159],
      ["Mango Matka Lassi", 159],
      ["Black Currant Matka Lassi", 159],
    ],
  },

  {
    category: "COLD COFFEE",
    items: [
      ["Cold Coffee", 139],
      ["Nutella Cold Coffee", 189],
    ],
  },

  {
    category: "TEA & HOT BEVERAGES",
    items: [
      ["Tea", 40],
      ["Green Tea", 45],
      ["Ginger Tea", 45],
      ["Lemon Tea", 35],
      ["Masala Tea", 45],
      ["Hot Badam Milk", 79],
      ["Filter Coffee", 55],
    ],
  },

  {
    category: "DESI CHILLERS",
    items: [
      ["Lemon Soda (Sweet & Salt)", 99],
      ["Nannari Sharbat", 119],
      ["Rose Milk", 139],
      ["Chilled Badam Milk", 159],
      ["Pista Milk", 179],
      ["Butter Milk", 99],
    ],
  },

  {
    category: "MILKSHAKES",
    items: [
      ["Chikoo Milkshake", 199],
      ["Strawberry Banana Milkshake", 219],
      ["Arabian Date & Nut Shake", 219],
      ["Avocado Milkshake", 219],
      ["Vanilla Milkshake", 199],
      ["Chocolate Milkshake", 189],
      ["Butterscotch Milkshake", 189],
      ["Oreo Milkshake", 209],
      ["Nutella Milkshake", 219],
    ],
  },

  {
    category: "MOCKTAILS & SPECIALS",
    items: [
      ["Blue Lagoon Mocktail", 169],
      ["Fruit Custard", 179],
      ["Falooda", 179],
    ],
  },
];

const signatureItems = [
  ["Kanchi Thali (Mon–Fri 12PM–3PM)", 229],
  ["Kanchi Weekend Thali (Sat–Sun 12PM–3PM)", 279],
];
export default function TempleMenu() {
  return (
    <>
    <div className="kanchi-menu-page">

      {/* BRAND */}
      <div className="kanchi-menu-brand">
        <h1 className="kanchi-menu-title">Kanchi Cafe</h1>
        <p className="kanchi-menu-tagline">A heritage dining experience</p>
      </div>

      <div className="kanchi-menu-wrapper fade-in">

        {/* HEADER */}
        <header className="kanchi-menu-header">
          <div className="kanchi-menu-logo">Kanchi Cafe</div>

          <div className="kanchi-menu-heading">
            MENU
            <div className="kanchi-menu-gold-divider"></div>
          </div>

          <div className="kanchi-menu-location">Kondapur</div>
        </header>

        {/* HERO */}
        <div
          className="kanchi-menu-hero"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* MENU GRID */}
        <div className="kanchi-menu-container">
          {menuData.map((section, index) => (
            <div key={index} className="kanchi-menu-card">
              <h2>{section.category}</h2>
              <div className="kanchi-menu-card-divider"></div>

              {section.items.map(([name, price], i) => (
                <div key={i} className="kanchi-menu-row">
                  <span>{name}</span>
                  <span className="kanchi-menu-price">₹{price}</span>
                </div>
              ))}
            </div>
          ))}

          {/* SIGNATURE */}
          <div className="kanchi-menu-signature-card">
            <div className="kanchi-menu-signature-text">
              <h2>SIGNATURE</h2>
              <div className="kanchi-menu-card-divider"></div>

              {signatureItems.map(([name, price], i) => (
                <div key={i} className="kanchi-menu-row">
                  <span>{name}</span>
                  <span className="kanchi-menu-price">₹{price}</span>
                </div>
              ))}
            </div>

            <img
              src={thalli}
              alt="Kanchi Signature Thali"
              className="kanchi-menu-signature-image"
            />
          </div>
          

        </div>
      </div>
    </div>

     <div className="brand">
        <h1 className="cafe-title">Kanchi Cafe</h1>
        <p className="cafe-tagline">A heritage dining experience</p>
      </div>

      </>
  );
}
