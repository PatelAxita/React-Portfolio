import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/fontawesome-free-solid";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Axita Patel</h1>
        <p className={styles.description}>
          Web, desktop Application Developer
        </p>

        <div class="social-nav">
          <ul className={styles.links}>

            <li className={styles.link}>
              <a class="nav-link" href="https://www.linkedin.com/in/axitap31/"
                title="LinkedIn" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><span
                  class="menu-title sr-only">LinkedIn</span></a>
            </li>
            <li className={styles.link}>
              <a class="nav-link" href="https://www.facebook.com/profile.php?id=100007907927641"
                title="Facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} /><span
                  class="menu-title sr-only">Facebook</span></a>
            </li>
          </ul>
          <div>

          </div>
        </div>

        <div>
          <a href="#contact" className={styles.contactBtn}>Get In Touch <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>



      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */