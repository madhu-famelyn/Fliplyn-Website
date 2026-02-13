import React from "react";
import "./Menu.css";

import backgroundImage from "../../../assets/hero-banner.jpg";
import thalli from "../../../assets/signature-thali.jpg";

const menuData = [
  {
    category: "IDLY",
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
      ["Khara Bath (Upma)", 79],
      ["Ghee Khara Bath", 99],
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
    ],
  },
  {
    category: "DOSA",
    items: [
      ["Plain Paper Dosa", 109],
      ["Ghee Plain Dosa", 119],
      ["Ghee Podi Dosa", 139],
      ["Paper Ghee Roast / Topi Dosa", 109],
      ["Onion Dosa", 129],
      ["Ragi Dosa", 119],
      ["Multigrain Dosa (2)", 129],
      ["Kal Dosa Vada Curry (2)", 149],
      ["Garlic Roast Dosa", 159],
      ["Chitti Pesarattu (2)", 159],
      ["Onion Uttapam (2)", 129],
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
    category: "SNACKS (4PM onwards)",
    items: [
      ["Mirchi Bajji", 79],
      ["Onion Pakoda", 79],
      ["Punugulu", 79],
      ["Mysore Bonda", 89],
      ["Challa Punugulu", 79],
      ["Masala Vada", 89],
    ],
  },
  {
    category: "VARIETY RICE",
    items: [
      ["Temple Pulihora", 109],
      ["Bisibellebath / Sambar Rice", 109],
      ["Lemon Rice", 89],
      ["Veg Biryani", 129],
      ["Curd Rice", 109],
    ],
  },
  {
    category: "TIFFIN COMBO",
    items: [
      ["Thatte Idly + Vada", 99],
      ["Idly (2) + Vada (1) + Filter Coffee", 129],
    ],
  },
  {
    category: "RICE COMBO",
    items: [
      ["Combo 1: Lemon Rice + Curd Rice", 139],
      ["Combo 2: Veg Biryani + Curd Rice", 139],
      ["Combo 3: Sambar Rice + Curd Rice", 139],
    ],
  },
  {
    category: "SWEETS",
    items: [
      ["Kesari Bath", 79],
      ["Chakkara Pongal", 99],
      ["Elaneer Payasam", 129],
      ["Carrot Halwa", 99],
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
