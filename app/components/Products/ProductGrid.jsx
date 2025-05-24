"use client";

import styles from "./ProductGrid.module.css";
import { useRef, useState } from "react";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { CiShop } from "react-icons/ci";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import Image from "next/image";

export default function ProductsGrid({ data }) {
  const carouselRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -240, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 240, behavior: "smooth" });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{data.category}</h2>
      <div className={styles.controls}>
        <button className={styles.left} onClick={scrollLeft}>
          <TfiArrowCircleLeft size={22} color="#828282" />
        </button>

        <div className={styles.carousel} ref={carouselRef}>
          {data.products.map((product, i) => (
            <div 
              className={styles.card} 
              key={i}
              onClick={() => handleProductClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={100}
                height={100}
                className={styles.image}
                unoptimized
              />
              <h3 className={styles.name}>{product.title}</h3>
              <p className={styles.category}>Price: {product.price}</p>
              <p className={styles.moq}>MOQ: {product.minimumOrderQuantity}</p>
              <div className={styles.bottom}>
                <div className={styles.shopInfo}>
                  <CiShop size={20} className={styles.icon} />
                  <p>{product.brand || "Unknown"}</p>
                </div>
                <div className={styles.enquiry}>
                  Send Enquiry <HiOutlineInboxArrowDown size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.right} onClick={scrollRight}>
          <TfiArrowCircleRight size={22} color="#828282" />
        </button>
      </div>

      {selectedProduct && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popup} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closePopup}>×</button>
            <div className={styles.popupContent}>
              <Image
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                width={200}
                height={200}
                className={styles.popupImage}
                unoptimized
              />
              <div className={styles.popupDetails}>
                <h2>{selectedProduct.title}</h2>
                <p><strong>Price:</strong> {selectedProduct.price}</p>
                <p><strong>MOQ:</strong> {selectedProduct.minimumOrderQuantity}</p>
                <p><strong>Brand:</strong> {selectedProduct.brand || "Unknown"}</p>
                {selectedProduct.description && (
                  <p><strong>Description:</strong> {selectedProduct.description}</p>
                )}
                <div className={styles.popupEnquiry}>
                  <button className={styles.enquiryButton}>
                    Send Enquiry <HiOutlineInboxArrowDown size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

