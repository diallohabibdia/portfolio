import React from "react";
import Link from "next/link";
import styles from "./Menu.module.css";

const MenuItem = ({ label, path, isActive, onClick }) => {
  return (
    <li className={styles.mobileMenuItem}>
      <Link
        href={path}
        onClick={onClick}
        className={`${styles.mobileMenuLink} ${isActive ? styles.activeLink : ""}`}
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
