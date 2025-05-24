"use client";
import React from "react";
import styles from "./Footer.module.css";
import { SiInstagram } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";
import { PiWhatsappLogoLight } from "react-icons/pi";

const features = [
  {
    icon: "/icons/value.png",
    title: "Great Value",
    desc: "We offer competitive prices on over 100 million items",
  },
  {
    icon: "/icons/truck.png",
    title: "Worldwide shopping",
    desc: "We ship to over 200 countries and regions, and our site comes in 12 languages",
  },
  {
    icon: "/icons/payment.png",
    title: "Safe payment",
    desc: "Pay with the world’s most popular and secure payment methods.",
  },
  {
    icon: "/icons/shield.png",
    title: "Shop with confidence",
    desc: "Our Buyer Protection policy covers your entire purchase journey",
  },
  {
    icon: "/icons/help.png",
    title: "Help center",
    desc: "Round-the-clock assistance for a smooth shopping experience.",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* Top Feature Section */}
      <div className={styles.featureSection}>
        {features.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.featureBox} ${
              idx === features.length - 1 ? styles.noBorder : ""
            }`}
          >
            <img src={item.icon} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Middle Link Section */}
      <div className={styles.linkSection}>
        <div className={styles.linkColumn}>
          <h5>Stay Connected</h5>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/biztradebd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareFacebook size={30} />
            </a>
            <a
              href="https://wa.me/+8801844444444"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiWhatsappLogoLight size={30} />
            </a>
            <a
              href="https://www.instagram.com/biztradebd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram size={30} />
            </a>
          </div>
        </div>

        <div className={styles.linkColumn}>
          <h5>About Us</h5>
          <ul>
            <li>About Biztrade</li>
            <li>Biztradebd.com Blog</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Policies & Rules</li>
            <li>Open a Case</li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h5>Source on Biztrade</h5>
          <ul>
            <li>Product Categories</li>
            <li>Request for Quatation</li>
            <li>Buyer Guide</li>
            <li>Global Business Directory</li>
            <li>Search Product or Suppliers</li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h5>Sell on Biztrade</h5>
          <ul>
            <li>Create Seller Page</li>
            <li>Premium Member Pricing</li>
            <li>Display your Product</li>
            <li>Seller Guide</li>
            <li>Learning Center</li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h5>Services</h5>
          <ul>
            <li>Buyer Matchmaking</li>
            <li>Export Market Ready</li>
            <li>Legal & Licensing</li>
            <li>Digital Marketing</li>
            <li>Web Design and Development</li>
            <li>Graphic Designing</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <span>One Stop Solution For All Business Needs</span>
        <span>© 2023 Biztrade.com. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
