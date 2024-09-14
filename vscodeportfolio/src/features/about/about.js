import { Outlet } from "react-router-dom";
import SideFilesBar from "../sideFilesBar/sidefilesbar";
import SideTerminal from "../sideterminalsection/sideterminal";
import Topterminal from "../topterminalsection/topterminal";
import styles from "./about.module.css";
import FilesInWorkSpace from "../filesinworkspace/filesinworkspace";
import Footer from "../footer/footer";

export default function About() {
  return (
    <div className={styles.aboutcontainer}>
      <Topterminal />
      <div className={styles.aftertopbarsection}>
        <SideTerminal />
        <SideFilesBar />
        <div className={styles.navbarfiles}>
          <div className={styles.navbarscroll}>
            <FilesInWorkSpace />
          </div>
          <div className={styles.mainContent}>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
