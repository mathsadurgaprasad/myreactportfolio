import styles from "./aboutcontent.module.css";

export default function AboutContent() {
  return (
    <div className={styles["about-content-details"]}>
      <h3 className={styles.aboutHeading}>About Me</h3>
      <p className={styles.aboutText}>
        Hello! I’m Durga Prasad, a passionate MERN stack developer with over 2
        years of experience in creating dynamic and responsive web applications.
        My expertise includes MongoDB, Express.js, React, and Node.js, and I’m
        committed to writing clean, scalable code that delivers great user
        experiences.
      </p>
    </div>
  );
}
