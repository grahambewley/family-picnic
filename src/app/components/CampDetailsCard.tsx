import styles from "../page.module.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle, FaArrowRight, FaMoneyBillWave } from "react-icons/fa";

export default function CampDetailsCard() {
  return (
    <div className={styles.infoCard}>

      <h2>Camp</h2>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaMoneyBillWave className={styles.icon} />
          <p>Suggested Donation</p>
        </div>
        <p className={styles.helperText}>$15 per camper to cover group site fees and cookout supplies.</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaMapMarkerAlt className={styles.icon} />
          <p>Seaton Creek Campground</p>
        </div>
        <p className={styles.helperText}>We have booked both group campsites at the campground. Each can accomodate up to 25 campers.</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaCalendarAlt className={styles.icon} />
          <p>June 27-29, 2025</p>
        </div>
        <p className={styles.helperText}>Check in: 2PM // Check out: 1PM</p>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoWrapper}>
          <FaInfoCircle className={styles.icon} />
          <p>Additional information</p>
        </div>
        <p className={styles.helperText}>Group sites each have a communical bonfire pit in the center and a charcoal grill cooking area with a couple of picnic tables. The campground parking lot also acts as a trailhead for the Manistee River Trail, which is just a short hike away.</p>
      </div>
      <a
        href="https://maps.app.goo.gl/Dhkkn2dQ2r4uioVY6"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.mapLink}
      >
        Google Maps Directions <FaArrowRight />
      </a>
    </div>
  );
}
