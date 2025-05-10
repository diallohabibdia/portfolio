"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Menu.module.css";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("FR");
  const pathname = usePathname(); // Récupérer l'URL actuelle

  // Charger les préférences utilisateur (mode sombre + langue)
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    const storedLanguage = localStorage.getItem("language") || "FR";

    setDarkMode(storedDarkMode);
    setLanguage(storedLanguage);
    document.documentElement.classList.toggle("dark-mode", storedDarkMode);
  }, []);

  // Mettre à jour la classe du dark mode à chaque changement
  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

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

  return (
    <>
      {/* Bouton menu mobile */}
      <button className={styles.menuButton} onClick={() => setOpen(!open)}>
        {open ? <XMarkIcon className="w-8 h-8 text-white" /> : <Bars3Icon className="w-8 h-8 text-white" />}
      </button>

      {/* Menu principal */}
      <nav className={`${styles.menu} ${open ? styles.open : ""}`}>
        <ul className={styles.menuList}>
          {links.map((link, index) => (
            <li key={index} className={styles.menuItem} onClick={() => open && setOpen(false)}>
              {link.isImage ? (
                <Link href={link.path}>
                  <Image src={link.src} alt="Logo" width={50} height={50} />
                </Link>
              ) : (
                <Link href={link.path} className={`${styles.menuLink} ${pathname.startsWith(link.path) ? styles.active : ""}`}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          {/* Mode sombre */}
          <li className={styles.menuItem} onClick={toggleDarkMode}>
            {darkMode ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-5 h-5 text-gray-800" />}
          </li>
          {/* Changement de langue */}
          <li className={styles.menuItem} onClick={toggleLanguage}>{language}</li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
