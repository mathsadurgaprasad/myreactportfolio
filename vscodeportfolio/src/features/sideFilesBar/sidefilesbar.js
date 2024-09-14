import styles from "./sidefilesbar.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
export default function SideFilesBar() {
  return (
    <div className={styles["side-files-bar"]}>
      <h2 className={styles.explorer}>EXPLORER</h2>
      <div className={styles.portfoliofiles}>
        <div className={styles.expandsection}>
          <span>
            <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
          </span>
          <p>portfolio</p>
        </div>
        <div className={styles.filenames}>
          <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
            <div>
              <span>
                <img
                  src="https://vscode-portfolio.vercel.app/_next/image?url=%2Freact_icon.svg&w=48&q=75"
                  alt="ract"
                />
              </span>
              <p>home.jsx</p>
            </div>
          </NavLink>
          <NavLink
            to="/about"
            style={{ color: "white", textDecoration: "none" }}
          >
            <div>
              <span>
                <img
                  src=" https://vscode-portfolio.vercel.app/_next/image?url=%2Fhtml_icon.svg&w=48&q=75"
                  alt="ract"
                />
              </span>

              <p>about.html</p>
            </div>
          </NavLink>
          <NavLink
            to="/projects"
            style={{ color: "white", textDecoration: "none" }}
          >
            <div>
              <span>
                <img
                  src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fjs_icon.svg&w=48&q=75"
                  alt="ract"
                />
              </span>
              <p>projects.js</p>
            </div>
          </NavLink>
          <NavLink
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            <div>
              <span>
                <img
                  src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fcss_icon.svg&w=48&q=75"
                  alt="ract"
                />
              </span>
              <p>contact.css</p>
            </div>
          </NavLink>
          <NavLink
            to="/skills"
            style={{ color: "white", textDecoration: "none" }}
          >
            <div>
              <span>
                <img
                  src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fjson_icon.svg&w=48&q=75"
                  alt="skills"
                />
              </span>
              <p>skills.json</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
