import React from "react";
import styles from "./Footer.module.css";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <h3 className={styles.footerTitle}>Maskur Developer</h3>
        <p className={styles.footerText}>
          Student of Informatics Engineering, State Electronics Polytechnic of Surabaya. Have a great interest in web display development. Have good verbal and verbal communication skills, able to work in a team, and high willingness to
          continue learning.
        </p>
        <div className={styles.footerSosmed}>
          <a href="https://wa.me/6287861130080" className={styles.sosmedBox}>
            <IoLogoWhatsapp className={styles.sosmedItem} />
          </a>
          <a href="https://www.instagram.com/maskurniash/" className={styles.sosmedBox}>
            <AiFillInstagram className={styles.sosmedItem} />
          </a>
          <a href="https://github.com/maskurniashidi" className={styles.sosmedBox}>
            <AiFillGithub className={styles.sosmedItem} />
          </a>
          <a href="https://www.linkedin.com/in/maskurniashidi/" className={styles.sosmedBox}>
            <AiFillLinkedin className={styles.sosmedItem} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
