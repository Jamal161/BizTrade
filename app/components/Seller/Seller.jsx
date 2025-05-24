"use client";
import styles from "./Seller.module.css";
import { useEffect, useRef } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { MdVerifiedUser } from "react-icons/md";

const sellers = [
  {
    name: "Adidas",
    category: "Leather & Leather Products",
    image: "/seller/adidas.png",
    rating: 4,
    verified: true,
  },
  {
    name: "La Chemise Lacoste",
    category: "RMG & Accessories",
    image: "/seller/lacoste.jpg",
    rating: 5,
    verified: false,
  },
  {
    name: "King T-Shirt",
    category: "RMG & Accessories",
    image: "/seller/king.jpg",
    rating: 4,
    verified: false,
  },
  {
    name: "Info BD",
    category: "ICT, Computer & Electronics",
    image: "/seller/infobd.jpg",
    rating: 5,
    verified: true,
  },
  {
    name: "Digital",
    category: "ICT, Computer & Electronics",
    image: "/seller/digital.png",
    rating: 5,
    verified: false,
  },
];

export default function Seller() {

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -240, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 240, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Featured Seller</h2>
      <div className={styles.controls}>
        <button className={styles.left} onClick={scrollLeft}>
          <TfiArrowCircleLeft size={22} color="#828282" />
        </button>

        <div className={styles.carousel} ref={carouselRef}>
          {sellers.map((seller, i) => (
            <div className={styles.card} key={i}>
              {seller.verified && (
                <div className={styles.badge}>
                  <MdVerifiedUser size={12} /> Verified
                </div>
              )}
              <img
                src={seller.image}
                alt={seller.name}
                className={styles.image}
              />
              <h3 className={styles.name}>{seller.name}</h3>
              <p className={styles.category}>{seller.category}</p>
              <div className={styles.rating}>
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < seller.rating
                        ? styles.starFilled
                        : styles.starEmpty
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className={styles.right} onClick={scrollRight}>
          <TfiArrowCircleRight size={22} color="#828282" />
        </button>
      </div>
    </div>
  );
}
