import styles from "./BusinessAdvisory.module.css";
import Image from "next/image";

const services = [
  {
    icon: "/icons/icon1.png", 
    title: "B2B Matchmaking",
    tags: ["Web Design", "Web Development"],
    tagColor: "pink",
  },
  {
    icon: "/icons/icon2.png",
    title: "Licensing",
    tags: ["SEO Package", "Digital Marketing"],
    tagColor: "blue",
  },
  {
    icon: "/icons/icon3.png",
    title: "Digital Marketing",
    tags: ["SEO Package", "Digital Marketing"],
    tagColor: "blue",
  },
  {
    icon: "/icons/icon4.png",
    title: "Web Design",
    tags: ["Trade License", "Export License"],
    tagColor: "blue",
  },
];

export default function BusinessAdvisory() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Business Advisory</h2>
      <div className={styles.grid}>
        {services.map((service, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.iconWrapper}>
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
              />
            </div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>
              We won't leave you hanging after your website is complete. We can
              take an in-depth look at your online marketing opportunities
              including SEO, Google Ads and inbound marketing techniques
            </p>
            <div className={styles.tags}>
              <span className={styles.tagGray}>{service.tags[0]}</span>
              <span
                className={`${styles.tagColored} ${styles[service.tagColor]}`}
              >
                {service.tags[1]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
