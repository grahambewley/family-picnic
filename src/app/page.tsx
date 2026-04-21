import styles from "./page.module.css";
import Image from "next/image";
import CampDetailsCard from "./components/CampDetailsCard";
import RideDetailsCard from "./components/RideDetailsCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.responsiveImage}>
          <Image src={"/rwyb-2026-title.svg"} alt="Run What Ya Brung Family Picnic 2026" width={923} height={303} style={{ width: '100%', height: 'auto' }} />
        </div>
        <p className={styles.eventDate}>June 26–28</p>
        <div className={styles.aboutText}>
          <p>An annual gathering to celebrate bikes, burgers, and being outside.</p>
          <p>Grab your favorite off-road-capable bike and join us for a weekend of camping and riding, multiple route options offering varying levels of{" "}
            <span className={styles.strikeThrough}>difficulty</span> adventure, and a post-ride cookout.
          </p>
        </div>
        <div className={styles.infoCardsContainer}>
          <CampDetailsCard />
          <RideDetailsCard />
        </div>
      </main>
      <div className={styles.banner}>
        <span>Are you coming?</span>
        <Link
          href="https://forms.gle/ecMo9W3bDxcaMBLi9"
          className={styles.linkButton}
        >
          RSVP
        </Link>
      </div>
    </div>
  );
}
