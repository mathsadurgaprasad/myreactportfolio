import styles from "./skills.module.css";
export default function Skills() {
  return (
    <div className={styles.skillcontainer}>
      <div>
        <h3>My Skills</h3>
        <div className={styles.allSkills}>
          <div className={styles.card}>
            <h2>React</h2>
          </div>
          <div className={styles.card}>
            <h2>Express.js</h2>
          </div>
          <div className={styles.card}>
            <h2>Node.js</h2>
          </div>
          <div className={styles.card}>
            <h2>MongoDb</h2>
          </div>
          <div className={styles.card}>
            <h2>Mongoose</h2>
          </div>
          <div className={styles.card}>
            <h2>Jsx</h2>
          </div>
          <div className={styles.card}>
            <h2>Html</h2>
          </div>
          <div className={styles.card}>
            <h2>CSS</h2>
          </div>
          <div className={styles.card}>
            <h2>GIt</h2>
          </div>
          <div className={styles.card}>
            <h2>Postman</h2>
          </div>
          <div className={styles.card}>
            <h2>Api Development</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
