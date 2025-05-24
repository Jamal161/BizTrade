import Categories from "./herocomponents/Categories";
import HeroImages from "./herocomponents/HeroImages";
import Services from "./herocomponents/Services";
import styles from "./HeroSection.module.css";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          {/* Left: Categories */}
          <Categories />
          <div className={styles.heroRight}>
            {/* Middle: Images */}
            <HeroImages />
            {/* Bottom: Services */}
            <Services />
          </div>
        </div>
      </section>
    </>
  );
}
