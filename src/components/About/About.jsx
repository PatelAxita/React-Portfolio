import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutimage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites. Along, with API integration, creating new API's 
                and testing endpoints. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>SQL, Analytics, and Manual Testing</h3>
              <p>
                I have experience using SQL to query databases, and performing analytics using analytical tools and Excel. 
                Apart from that, I did manual testing on NeoLoad and Zephyr to monitor API endpoints, response time, throughput,
                performance and reporting with live communicating results with the clients.  
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
