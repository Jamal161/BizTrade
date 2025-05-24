'use server';
import React from "react";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/HeroSection";
import Footer from "./components/Foot/Footer";
import Seller from "./components/Seller/Seller";
import ProductsGrid from "./components/Products/ProductGrid";
import RFQ from "./components/RFQ/RFQ";
import BusinessAdvisory from "./components/BusinessAdvisory/BusinessAdvisory";
import Post from "./components/Post/Post";
import styles from "./page.module.css";


async function fetchProductsByCategory() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  if (!data || !data.products) {
    throw new Error("Failed to fetch data");
  }
  const categories = {};
  data.products.forEach((product) => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push({
      title: product.title,
      price: product.price,
      minimumOrderQuantity: product.minimumOrderQuantity,
      brand: product.brand,
      thumbnail: product.thumbnail,
    });
  });

  return categories;
}

export default async function Home() {
  const productCategories = await fetchProductsByCategory();
  return (
    <div className={styles.mainBody}>
      <Navbar />
      <Hero />
      <Seller />
      {Object.entries(productCategories).map(([category, products]) => (
        <ProductsGrid key={category} data={{ category, products }} />
      ))}
      <BusinessAdvisory />
      <RFQ />
      <Post />
      <Footer />
    </div>
  );
}
