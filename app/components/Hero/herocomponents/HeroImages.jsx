// herocomponents/HeroImages.jsx
import styles from "./HeroImages.module.css";


export default function HeroImages() {
  return (
    <div className={styles.middleContainer}>
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <img src="/hero1.jpg" alt="Hero 1" className={styles.fullImage} />
      </div>

      {/* Right Column */}
      <div className={styles.rightColumn}>
        <div className={styles.imageOne}>
          <img src="/hero2.jpg" alt="Hero 2" className={styles.halfImage} />
          <div className={styles.overlayText}>
            <p>Source products from trusted suppliers.</p>
            <a href="#" className={styles.link}>
              Explore <span className={styles.bold}>Seller List</span>
            </a>
          </div>
        </div>

        <div className={styles.imageTwo}>
          <img src="/hero3.jpg" alt="Hero 3" className={styles.halfImage} />
          <div className={styles.overlayText}>
            <p>Searching for a product?</p>
            <a href="#" className={styles.link}>
              Post Buy <span className={styles.bold}>Requirement</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}