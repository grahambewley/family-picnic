import styles from "./page.module.css";
import Image from "next/image";
import CampDetailsCard from "./components/CampDetailsCard";
import AboutCard from "./components/AboutCard";
import RideDetailsCard from "./components/RideDetailsCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.responsiveImage}>
          <Image src={"/picnic-words.png"} alt="Bikes and Coffee" layout="responsive" width={360} height={360} />
        </div>
        <div className={styles.infoCardsContainer}>
          <AboutCard />
          <CampDetailsCard />
          <RideDetailsCard />
        </div>
      </main>

    </div>
  );
}
