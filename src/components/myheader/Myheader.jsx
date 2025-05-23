"use client";
import React, { useState, useEffect } from "react";
import Menu from "./menu/Menu";
import styles from "./Myheader.module.css";

const Myheader = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && activeSection !== entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Détecte quand 50% de la section est visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [activeSection]);

  return (
    <header
      className={`${styles.Myheader} ${
        activeSection === "accueil" ? styles.homeHeader : styles.scrolledHeader
      }`}
    >
      <Menu activeSection={activeSection} />
    </header>
  );
};

export default Myheader;