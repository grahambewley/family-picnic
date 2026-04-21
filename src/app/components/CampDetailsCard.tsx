import styles from "../page.module.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle, FaMoneyBillWave } from "react-icons/fa";

export default function CampDetailsCard() {
  return (
    <div className={styles.infoCard}>

      <h2>Camp</h2>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaMoneyBillWave className={styles.icon} />
          <p>Suggested Donation</p>
        </div>
        <p className={styles.helperText}>$25 per camper to cover site costs and cookout supplies.</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaMapMarkerAlt className={styles.icon} />
          <p>Private Property — Irons, MI</p>
        </div>
        <p className={styles.helperText}>This year we&apos;re camping at Peter&apos;s in-laws&apos; cabin in the Manistee National Forest region. We&apos;ll be packing our tents into their front yard for the weekend. The cabin is right on the Little Manistee River — swim or even fly fish! Exact location details will be shared with participants via email.</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaCalendarAlt className={styles.icon} />
          <p>Arrival &amp; Departure</p>
        </div>
        <p className={styles.helperText}>Campers can begin arriving at 2PM on Friday and should plan to leave by 12PM on Sunday.</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaInfoCircle className={styles.icon} />
          <p>Additional information</p>
        </div>
        <p className={styles.helperText}>The cabin itself will be off limits, but porta potties will be on site. We&apos;re surrounded by forest roads and not too far from a couple great up north bars. As this is private property on a private street, we request your ultimate respect!</p>
      </div>
    </div>
  );
}
