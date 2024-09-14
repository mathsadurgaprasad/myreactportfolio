import { Link, NavLink } from "react-router-dom";
import styles from "./filesinworkspace.module.css";
export default function FilesInWorkSpace() {
  return (
    <div className={styles.filesinworkcontainer}>
      <div className={styles.filenames}>
        <NavLink
          to="/"
          // Inline style with a function to apply active styles
          style={({ isActive }) => ({
            color: "white",
            textDecoration: "none",
            backgroundColor: isActive ? "rgb(36, 41, 46)" : "inherit",
            borderTop: isActive && "1.8px solid #f9826c",
          })}
        >
          <div>
            <span>
              <img
                src="https://vscode-portfolio.vercel.app/_next/image?url=%2Freact_icon.svg&w=48&q=75"
                alt="jsx"
              />
            </span>
            home.jsx
          </div>
        </NavLink>
        <NavLink
          to="/about"
          // Inline style with a function to apply active styles
          style={({ isActive }) => ({
            color: "white",
            textDecoration: "none",
            backgroundColor: isActive ? "rgb(36, 41, 46)" : "inherit", // Apply active background color
            // Apply active border
            borderTop: isActive && "1.8px solid #f9826c",
          })}
        >
          <div>
            <span>
              <img
                src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fhtml_icon.svg&w=48&q=75"
                alt="html"
              />
            </span>
            about.html
          </div>
        </NavLink>
        <NavLink
          to="/projects"
          // Inline style with a function to apply active styles
          style={({ isActive }) => ({
            color: "white",
            textDecoration: "none",
            backgroundColor: isActive ? "rgb(36, 41, 46)" : "inherit",
            borderTop: isActive && "1.8px solid #f9826c",
          })}
        >
          <div>
            <span>
              <img
                src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fjs_icon.svg&w=48&q=75"
                alt="js"
              />
            </span>
            projects.js
          </div>
        </NavLink>

        <NavLink
          to="/contact"
          // Inline style with a function to apply active styles
          style={({ isActive }) => ({
            color: "white",
            textDecoration: "none",
            backgroundColor: isActive ? "rgb(36, 41, 46)" : "inherit",
            borderTop: isActive && "1.8px solid #f9826c",
          })}
        >
          <div>
            <span>
              <img
                src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fcss_icon.svg&w=48&q=75"
                alt="css"
              />
            </span>
            contact.css
          </div>
        </NavLink>
        <NavLink
          to="/skills"
          // Inline style with a function to apply active styles
          style={({ isActive }) => ({
            color: "white",
            textDecoration: "none",
            backgroundColor: isActive ? "rgb(36, 41, 46)" : "inherit",
            borderTop: isActive && "1.8px solid #f9826c",
          })}
        >
          <div>
            <span>
              <img
                src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fjson_icon.svg&w=48&q=75"
                alt="json"
              />
            </span>
            skills.json
          </div>
        </NavLink>
      </div>
    </div>
    // </div>
  );
}
