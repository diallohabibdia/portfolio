"use client";
import React, { useState, useEffect } from "react";
import styles from "./Profil.module.css";

const ProfilePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
    if (prefersDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <div
      className={`${styles.profileContainer} ${darkMode ? styles.profileContainerDark : ""}`}
    >
      <div className={styles.centeredContent}>
        <h1 className={`${styles.profileTitle} ${darkMode ? "text-white" : ""}`}>
          Profil Professionnel
        </h1>

        <p className={`${styles.profileSubtitle} ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          Ma présentation
        </p>

        <p
          className={`${styles.profileDescription} ${
            darkMode ? styles.profileDescriptionDark : ""
          }`}
        >
          Diplomé en programmation informatique, passionné par le développement logiciel et les nouvelles technologies.
          Curieux et motivé, j’ai acquis de solides compétences en
          <strong> développement web et mobile (React, Next.js, Java, Kotlin, C#) </strong> à travers mes études
          et projets académiques. Capable d’apprendre rapidement, je suis à l’aise en travail d’équipe et en autonomie.
          Je suis à la recherche d’une première expérience professionnelle pour mettre en pratique mes compétences et
          continuer à progresser.
        </p>

        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>05+</span>
            <p className={styles.statLabel}>Projets académiques réalisés</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>02+</span>
            <p className={styles.statLabel}>Langages maîtrisés</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Bientôt diplômé 🎓</span>
            <p className={styles.statLabel}>Programmation - La Cité</p>
          </div>
        </div>

        <a
          href="/Diallo, Habib_CV.pdf"
          download="Habib, Diallo_CV.pdf"
          className={styles.downloadButton}
        >
          Télécharger mon CV <span className="ml-2">📥</span>
        </a>
      </div>
    </div>
  );
};

export default ProfilePage;
