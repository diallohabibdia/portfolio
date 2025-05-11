import Link from "next/link";
import styles from "./Menu.module.css";

const MenuItem = ({ label, path, isActive, onClick }) => {
  return (
    <li className={styles.mobileMenuItem}>
      <Link
        href={path}
        onClick={onClick}
        className={`${styles.menuLink} ${isActive ? styles.active : ""}`}
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
