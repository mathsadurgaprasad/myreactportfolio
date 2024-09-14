import styles from "./topterminal.module.css";
export default function Topterminal() {
  return (
    <div className={styles["top-terminal-section"]}>
      <div className={styles.vscodelogo}>
        <img
          src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fvscode_icon.svg&w=32&q=75"
          alt="vscode"
        />
        <div className={styles.topmenuoption}>
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Run</p>
          <p>Terminal</p>
          <p>Help</p>
        </div>
      </div>
      <div className={styles.topnamesection}>
        <p>Durga Prasad - Vs Code</p>
      </div>
      <div className={styles.topcloseminimsection}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
