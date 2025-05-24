import styles from "./Services.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

const services = [
  { icon: "/icons/buyer.png", title: "Buyer Matchmaking", link: "#" },
  { icon: "/icons/seller.png", title: "Become a Seller", link: "#" },
  { icon: "/icons/service.png", title: "Legal Service", link: "#" },
  { icon: "/icons/member.png", title: "Membership Plans", link: "#" },
];

export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h3 className={styles.title}>More Services</h3>
      <div className={styles.servicesColumn}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.textGroup}>
              <h4 className={styles.serviceTitle}>{service.title}</h4>
              <a href={service.link} className={styles.learnMore}>
                Learn more <FaArrowCircleRight size={18} color={"#F88216"} />
              </a>
            </div>
            <img
              src={service.icon}
              alt={service.title}
              className={styles.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
