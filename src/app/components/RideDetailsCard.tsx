import styles from "../page.module.css";
import { FaPepperHot, FaFire } from "react-icons/fa";

export default function RideDetailsCard() {
  return (
    <div className={styles.infoCard}>
      <h2>Ride</h2>
      <div className={styles.infoSection}>
        <p className={styles.helperText}>We&apos;re preparing 3 routes, each with varying degrees of difficulty. Regardless which route you choose, rides will take off Saturday morning at 10AM.</p>
        <p className={styles.helperText}>Routes are still being finalized — exact details and links coming soon!</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaPepperHot className={styles.icon} />
          <p className={styles.routeName}>Bimble</p>
        </div>
        <p className={styles.helperText}>~20 miles. Short and sweet. Primarily forest roads.</p>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <div className={styles.pepperWrapper}>
            <FaPepperHot className={styles.icon} />
            <FaPepperHot className={styles.icon} />
          </div>
          <p className={styles.routeName}>Ramble</p>
        </div>
        <p className={styles.helperText}>~50 miles. The sweet spot. A good mix of gravel, forest roads, and singletrack.</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <div className={styles.pepperWrapper}>
            <FaPepperHot className={styles.icon} />
            <FaPepperHot className={styles.icon} />
            <FaPepperHot className={styles.icon} />
          </div>
          <p className={styles.routeName}>Scramble</p>
        </div>
        <p className={styles.helperText}>~50 miles. An added challenge. Similar to the Ramble, but with more rugged terrain.</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaFire className={styles.icon} />
          <p className={styles.routeName}>Warmup</p>
        </div>
        <p className={styles.helperText}>~10 miles. Nice little warmup, perfect for Friday evening.</p>
      </div>
    </div>
  );
}
