import React from "react";
import Image from "next/image";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/images/monLogo.png"
        alt="Logo"
        width={200}
        height={100}
        className={styles.logoImage}
      />
    </div>
  );
};

export default Logo;
