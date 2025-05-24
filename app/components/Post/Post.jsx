import React from "react";
import styles from "./Post.module.css";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const Post = () => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.imageSection}>
        <Image
          src="/girl.png"
          alt="Girl illustration"
          width={280}
          height={280}
        />
      </div>
      <div className={styles.contentSection}>
        <h2 className={styles.heading}>Post Buy Requirement</h2>
        <p className={styles.subheading}>
          Get the Best Deals and Exclusive Offers with Biztrade
        </p>
        <div className={styles.progressBar}>
          <div className={styles.progress} />
        </div>
        <label className={styles.label}>
          Tell us about your requirement
          <span className={styles.required}>*</span>
        </label>
        <div className={styles.inputWrapper}>
          <span className={styles.searchIcon}>
            <CiSearch size={24} color="#A0A0A0" />
          </span>
          <input
            type="text"
            placeholder="Enter the product you are looking for"
            className={styles.input}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
