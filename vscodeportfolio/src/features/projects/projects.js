import styles from './projects.module.css';
export default function Project() {
  return (
    <div className={styles.projectscontainer}>
      <h3 style={{color:'white' , fontSize:'18.72px'}}>Stuff i have built so far</h3>
      <div className={styles.projects}>
          <div className={styles.eachproject}>
            <div style={{width:'100%'}}>
              <img src="project1.png"/>
            </div>
              <div className={styles.eachprojectdescription}>
                <h3>Vs Code Protfolio</h3>
                <p className={styles.paradescription}>A responsive portfolio website with vs code theme</p>
                <button className={styles.visitwebsitebutton}>Visit Site</button>
              </div>
          </div>
      </div>
    </div>
  );
}
