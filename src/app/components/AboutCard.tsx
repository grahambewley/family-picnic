import styles from "../page.module.css";

export default function AboutCard() {
  return (
    <div className={styles.infoCard} style={{ backgroundColor: "transparent", padding: "0" }}>
      <h2>What</h2>
      <p style={{marginBottom: "12px"}}>An annual gathering to celebrate bikes, burgers, and being outside.</p>
      
      <p>Grab your favorite off-road-capable bike and join us for a weekend of group camping, multiple route options offering varying levels of{" "}
        <span className={styles.strikeThrough}>difficulty</span> adventure, and a post-ride cookout.
      </p>
    </div>
  );
}
