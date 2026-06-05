import Link from "next/link";
import styles from "../page.module.css";
import { FaPepperHot, FaFire, FaArrowRight } from "react-icons/fa";

export default function RideDetailsCard() {
  return (
    <div className={styles.infoCard}>
      <h2>Ride</h2>
      <div className={styles.infoSection}>
        <p className={styles.helperText}>We&apos;re preparing 3 routes, each with varying degrees of difficulty. Regardless which route you choose, rides will take off Saturday morning at 10AM.</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaPepperHot className={styles.icon} />
          <p className={styles.routeName}>Bimble</p>
          <Link
            href="https://ridewithgps.com/routes/55437840"
            className={styles.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View route
            <FaArrowRight />
          </Link>
        </div>
        <p className={styles.helperText}>24 miles. Short and sweet. Primarily forest roads.</p>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <div className={styles.pepperWrapper}>
            <FaPepperHot className={styles.icon} />
            <FaPepperHot className={styles.icon} />
          </div>
          <p className={styles.routeName}>Ramble</p>
          <Link
            href="https://ridewithgps.com/routes/55437565"
            className={styles.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View route
            <FaArrowRight />
          </Link>
        </div>
        <p className={styles.helperText}>45 miles. The sweet spot. A good mix of gravel, forest roads, and singletrack.</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <div className={styles.pepperWrapper}>
            <FaPepperHot className={styles.icon} />
            <FaPepperHot className={styles.icon} />
            <FaPepperHot className={styles.icon} />
          </div>
          <p className={styles.routeName}>Scramble</p>
          <Link
            href="https://ridewithgps.com/routes/54848978"
            className={styles.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View route
            <FaArrowRight />
          </Link>
        </div>
        <p className={styles.helperText}>47 miles. An added challenge. Similar to the Ramble, but with more rugged terrain.</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaFire className={styles.icon} />
          <p className={styles.routeName}>Warmup</p>
          <Link
            href="https://ridewithgps.com/routes/54849548"
            className={styles.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View route
            <FaArrowRight />
          </Link>
        </div>
        <p className={styles.helperText}>10 miles. Nice little warmup, perfect for Friday evening.</p>
      </div>
    </div>
  );
}
