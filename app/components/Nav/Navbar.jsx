"use client";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      {/* Section 1: Banner */}
      <div className={styles.topBanner}></div>
      {/* Section 2: Top Links */}
      <div className={styles.topLinks}>
        <ul>
          <li>
            Sell on Biztrade <FaCaretDown size={14} />
          </li>
          <li>
            Help <FaCaretDown size={14} />
          </li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Sign In</li>
          <li>
            Register <FaCaretDown size={14} />
          </li>
          <li className={styles.noBorder}>
            <FaUser size={10} /> Account
          </li>
        </ul>
      </div>

      {/* Section 3: Logo, Search, Menu */}
      <div className={styles.searchBarColor}>
        <div className={styles.searchBarSection}>
          <div className={styles.left}>
            <Image src="/logo.png" alt="Logo" width={144} height={32} />
          </div>

          <div className={styles.center}>
            <div className={styles.tabs}>
              <span className={styles.activeTab}>Products</span>
              <span>Category</span>
              <span>Events</span>
            </div>

            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search for product category or service"
              />
              <button>Search</button>
            </div>

            <div className={styles.tags}>
              <span>shoe</span>
              <span>toys</span>
              <span>fish</span>
              <span>wooden furniture</span>
              <span>plastic</span>
            </div>
          </div>

          <div className={styles.right}>
            <span>
              Buyer <FaCaretDown width={10} height={5} />
            </span>
            <span>
              Seller <FaCaretDown width={10} height={5} />
            </span>
            <span>
              Advisory <FaCaretDown size={14} width={10} height={5} />
            </span>
            <span>
              Events <FaCaretDown width={10} height={5} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
