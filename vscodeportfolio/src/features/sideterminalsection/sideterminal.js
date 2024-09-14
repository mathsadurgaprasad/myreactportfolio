import { Link, NavLink } from "react-router-dom";
import styles from "./sideterminal.module.css";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { colors } from "@mui/material";

export default function SideTerminal() {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideNavbar}>
        <div>
          <Link style={{ color: "white" }}>
            {/* <i style={{ fontSize: "28px" }} class="fa-regular fa-copy"></i> */}
            <FileCopyOutlinedIcon style={{ fontSize: "28px" }} />
          </Link>
        </div>
        <div>
          <Link style={{ color: "white" }}>
            {/* <i style={{ fontSize: "28px" }} class="fa-brands fa-github"></i> */}
            <GitHubIcon />
          </Link>
        </div>
        <div>
          <Link style={{ color: "white" }}>
            {/* <i style={{ fontSize: "28px" }} class="fa-solid fa-code"></i> */}
            <CodeOutlinedIcon />
          </Link>
        </div>
        <div>
          <Link style={{ color: "white" }}>
            {/* <i style={{ fontSize: "28px" }} class="fa-solid fa-code"></i> */}
            <CreateOutlinedIcon />
          </Link>
        </div>
        <div>
          <Link style={{ color: "white" }}>
            {/* <i style={{ fontSize: "28px" }} class="fa-solid fa-code"></i> */}
            <EmailOutlinedIcon />
          </Link>
        </div>
      </div>
      <div className={styles.sideNavbar}>
        <div>
          <Link style={{ color: "white" }}>
            <SettingsIcon />
          </Link>
        </div>
        <div>
          <Link style={{ color: "white" }}>
            <AccountCircleIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
