import styles from "./footer.module.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
export default function Footer() {
  return (
    <div className={styles.footersection}>
      <div className={styles.left}>
        <div>
          <i class="fa-solid fa-code-branch"></i>
          <p>main</p>
        </div>
        <div>
          <i class="fa-regular fa-circle-xmark"></i>
          <p>0</p>
          <i class="fa-solid fa-triangle-exclamation"></i>
          <p>0</p>
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <p>Powered By next js </p>
        </div>
        <div>
          <DoneAllIcon style={{ fontSize: "18px" }} />
          <p>Prietter</p>
        </div>
        <div>
          <NotificationsNoneIcon style={{ fontSize: "18px" }} />
        </div>
      </div>
    </div>
  );
}
