import { FaPlay } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import styles from "./RFQ.module.css";

export default function RFQ() {
  return (
    <section className={styles.rfqSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2>What is RFQ</h2>
          <div className={styles.rfqIntro}>
            <div className={styles.rfqIcon}>
              <FaPlay color="#828282" size={32} />
            </div>
            <p>
              Request for Quotation is a free and easy solution for buyers who
              are seeking quality quotes. By sending out a simple request, you
              will receive multiple quotes from qualified suppliers.
            </p>
          </div>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <h3>2,701,000+</h3>
              <p>RFQs posted</p>
            </div>
            <div className={styles.statItem}>
              <h3>163,000+</h3>
              <p>Active suppliers</p>
            </div>
            <div className={styles.statItem}>
              <h3>&lt; 22h</h3>
              <p>Average response time</p>
            </div>
            <div className={styles.statItem}>
              <h3>7602</h3>
              <p>Industries covered</p>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.buyerInfo}>
            <img
              src="/buyer.png"
              alt="Happy Buyer"
              className={styles.buyerImage}
            />
            <div>
              <h4>Buyer from the U.S</h4>
              <p className={styles.buyerDetails}>
                Hardware Computer and Phone Accessories Business
              </p>
            </div>
          </div>
          <p className={styles.buyerQuote}>
            &#34;With RFQ I connected with almost 100 factories in an instant.
            Vendor on Biztrade reply quickly
          </p>
          <div className={styles.dot}>
            <BsThreeDots color="#828282" size={40}/>
          </div>
        </div>
      </div>
    </section>
  );
}
