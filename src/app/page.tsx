import styles from "./page.module.css";
import Image from "next/image";
import CampDetailsCard from "./components/CampDetailsCard";
import AboutCard from "./components/AboutCard";
import RideDetailsCard from "./components/RideDetailsCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.responsiveImage}>
          <Image src={"/picnic-words-illustration.png"} alt="Bikes and Coffee" layout="responsive" width={360} height={360} />
        </div>
        <div className={styles.infoCardsContainer}>
          <AboutCard />
          <CampDetailsCard />
          <RideDetailsCard />
        </div>
      </main>
      <div className={styles.banner}>
        <span>Are you coming?</span>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeLS29hnSCrZT4ufjm9Ju-TFGDftEyms2_RenQgvNddhHjZlA/viewform?usp=dialog"
          className={styles.linkButton}
        >
          RSVP
        </Link>
      </div>
    </div>
  );
}
