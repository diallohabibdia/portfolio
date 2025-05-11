"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("FR");
  const [isMobile, setIsMobile] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setOpen(false); // Ferme le menu si on passe en desktop
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "FR";
    setLanguage(storedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "FR" ? "EN" : "FR";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const links = [
    { type: "Image", src: "/images/monLogo.png", path: "/", isImage: true },
    { label: language === "FR" ? "Accueil" : "Home", path: "/" },
    { label: language === "FR" ? "Profil" : "Profile", path: "/profil" },
    { label: language === "FR" ? "Compétences" : "Skills", path: "/competences" },
    { label: language === "FR" ? "Expérience" : "Experience", path: "/experience" },
    { label: language === "FR" ? "Portfolio" : "Portfolio", path: "/portfolio" },
    { label: language === "FR" ? "Contact" : "Contact", path: "/contact" },
  ];

  if (isMobile === null) return null;

  return (
    <>
      {/* Header avec logo et bouton burger */}
      <header className={styles.header}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/monLogo.png"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* Menu Desktop */}
        {!isMobile && (
          <nav className={styles.desktopNav}>
            <ul className={styles.desktopMenu}>
              {links.map((link, index) => (
                <li key={index} className={styles.menuItem}>
                  {link.isImage ? null : (
                    <Link
                      href={link.path}
                      className={`${styles.menuLink} ${
                        pathname === link.path ? styles.active : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className={styles.menuItem}>
                <button
                  className={styles.languageButton}
                  onClick={toggleLanguage}
                >
                  {language}
                </button>
              </li>
            </ul>
          </nav>
        )}

        {/* Bouton Burger (mobile seulement) */}
        {isMobile && (
          <button
            className={`${styles.burgerButton} ${open ? styles.open : ""}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Menu"
          >
            <span className={styles.burgerBar}></span>
            <span className={styles.burgerBar}></span>
            <span className={styles.burgerBar}></span>
          </button>
        )}
      </header>

      {/* Menu Mobile (déroulant) */}
      {isMobile && (
        <div className={`${styles.mobileMenuWrapper} ${open ? styles.open : ""}`}>
          <div className={styles.mobileMenu}>
            <nav>
              <ul className={styles.mobileMenuList}>
                {links
                  .filter((link) => !link.isImage)
                  .map((link, index) => (
                    <MenuItem
                      key={index}
                      label={link.label}
                      path={link.path}
                      isActive={pathname === link.path}
                      onClick={() => setOpen(false)}
                    />
                  ))}
                <li className={styles.mobileMenuItem}>
                  <button
                    className={styles.languageButton}
                    onClick={toggleLanguage}
                  >
                    {language}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;