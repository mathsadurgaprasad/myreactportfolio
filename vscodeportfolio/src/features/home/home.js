import { styled } from "@mui/material";
import styles from "./home.module.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  function handleDownloadResume() {
    const url = "/MyReactResume.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "DurgaPrasad-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homenameandAll}>
        <h3>
          <span className={styles.mindisplyhello}>

            Hello,
          </span>
          <br /> I'am Durga Prasad
        </h3>
        <p className={styles["typing-container"]}>Mern Stack Developer</p>
        <div className={styles.button}>
          <NavLink>
            <button onClick={handleDownloadResume} className={styles.btn1}>Download CV</button>
          </NavLink>
          <NavLink to="/contact">
            <button className={styles.btn2}>Contact Me</button>
          </NavLink>
        </div>
      </div>
      <div className={styles.circles}>
        <svg
          width="486"
          height="534"
          viewBox="0 0 486 534"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="HomePage_illustration__sclzu"
        >
          <circle cx="167" cy="60" r="60" fill="#D7F484"></circle>
          <circle cx="37.5" cy="215.5" r="37.5" fill="#f9826c"></circle>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M486 144.469c-38.145-31.86-87.255-51.033-140.842-51.033-121.415 0-219.842 98.427-219.842 219.842 0 14.167 1.34 28.02 3.9 41.441 47.414-86.154 91.678-142.17 146.717-170.767 56.069-29.132 121.816-29.08 210.067-6.68v-32.803zm0 48.288v289.33c-38.145 31.86-87.255 51.033-140.842 51.033-100.321 0-184.947-67.197-211.325-159.037l1.502.805c49.937-93.22 94.046-149.844 147.514-177.625 52.014-27.025 114.411-27.498 203.151-4.506z"
            fill="#f9826c"
          ></path>
        </svg>
      </div>
    </div>
  );
}
