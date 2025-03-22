import styles from "../page.module.css";
import { FaArrowRight, FaPepperHot } from "react-icons/fa";

export default function RideDetailsCard() {
  return (
    <div className={styles.infoCard}>
      <h2>Ride</h2>
      <div className={styles.infoSection}>
        <p className={styles.helperText}>We&apos;ve prepared 3 routes, each with varying degrees of difficulty. Regardless which route you choose, rides will take off from the campground Saturday morning at 10AM. </p>
        <p className={styles.helperText}>For the Ramble and Scramble, we&apos;re recommending (minimum) 2&quot; tires due to the singletrack sections along these routes.</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaPepperHot className={styles.icon} />
          <p>Bimble</p>
          <a
            href="https://ridewithgps.com/routes/48770587"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            Route <FaArrowRight />
          </a>
        </div>
        <p className={styles.helperText}>22 miles. Short and sweet. Primarily forest roads, no singletrack.</p>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <div className={styles.pepperWrapper}>
            <FaPepperHot className={styles.icon} />
            <FaPepperHot className={styles.icon} />
          </div>
          <p>Ramble</p>
          <a
            href="https://ridewithgps.com/routes/48519715"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            Route <FaArrowRight />
          </a>
        </div>
        <p className={styles.helperText}>49 miles. The sweet spot. A good mix of gravel, forest roads, and mild singletrack.</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <div className={styles.pepperWrapper}>
            <FaPepperHot className={styles.icon} />
            <FaPepperHot className={styles.icon} />
            <FaPepperHot className={styles.icon} />
          </div>
          <p>Scramble</p>
          <a
            href="https://ridewithgps.com/routes/48526433"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            Route <FaArrowRight />
          </a>
        </div>
        <p className={styles.helperText}>52 miles. An added challenge. Similar to The Ramble route, but with a bit of rugged singletrack. Expect a bit of hike-a-bike.</p>
      </div>
    </div>
  );
}
