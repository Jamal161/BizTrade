import styles from "./Categories.module.css";
import { FaTshirt, FaShoePrints, FaLeaf, FaSeedling, FaCouch, FaBook, FaTv, FaShoppingBag, FaUtensils, FaHammer } from "react-icons/fa";

const categories = [
  { icon: <FaTshirt />, label: "RMG & Accessories" },
  { icon: <FaShoePrints />, label: "Leather & Leather..." },
  { icon: <FaLeaf />, label: "Jute & Jute Produc..." },
  { icon: <FaSeedling />, label: "Agro & Agro Based..." },
  { icon: <FaUtensils />, label: "Home Textiles, Kitc..." },
  { icon: <FaShoppingBag />, label: "Handicraft & Handl..." },
  { icon: <FaUtensils />, label: "Food & Beverages" },
  { icon: <FaCouch />, label: "Furniture and Furnit..." },
  { icon: <FaHammer />, label: "Building materials &..." },
  { icon: <FaBook />, label: "Books, Stationary &..." },
  { icon: <FaTv />, label: "Consumer Electroni..." },
  { icon: <FaShoppingBag />, label: "Fashion, Beauty & P..." },
];

export default function Categories() {
  return (
    <div className={styles.categories}>
      <h3 className={styles.heading}>Top Categories</h3>
      <ul className={styles.list}>
        {categories.map((cat, idx) => (
          <li key={idx} className={styles.item}>
            <span className={styles.icon}>{cat.icon}</span>
            <span className={styles.label}>{cat.label}</span>
          </li>
        ))}
      </ul>
      <a href="#" className={styles.viewAll}>
        View all categories
      </a>
    </div>
  );
}
