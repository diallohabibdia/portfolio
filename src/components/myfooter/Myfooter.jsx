import styles from "./Myfooter.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.copyright}>© HD-TECH Vision. Tout droit réservé</p>
        </div>
        <div className={styles.center}>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        
      </div>
      
    </footer>
  );
}
