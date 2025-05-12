"use client";
import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";
import styles from "./Experience.module.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    setDarkMode(mediaQuery.matches);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const tabs = [
    { id: "education", icon: <FaGraduationCap />, label: "Éducation" },
    { id: "work", icon: <FaBriefcase />, label: "Travail" },
    { id: "certificates", icon: <FaCertificate />, label: "Certificats" },
  ];

  const data = {
    education: [
      { title: "DEC en Programmation Informatique", place: "Collège La Cité, Ottawa, Canada", year: "2024 - 2025" },
      { title: "Baccalauréat en Informatique", place: "Université du Quebec à Chicoutimi, Québec, Canada", year: "2022 - 2023" },
      { title: "Licence en Economie Finance", place: "Université Générale Lansana Conté de Sonfonia, Conakry", year: "2019 - 2022" },
    ],
    work: [
      { title: "Marchandiseur", place: "IMPACTDETAIL", year: "Mars 2024 - Décembre 2024" },
      { title: "Pré-assembleur", place: "Pepsico", year: "Août 2023 - Décembre 2023" },
      { title: "Marchandiseur", place: "Pepsico", year: "Avril 2023 - Août 2023" },
      { title: "Approvisionnement de nuit", place: "Walmart", year: "Septembre 2022 - Avril 2023" },
    ],
    certificates: [
      { title: "Certification en fondements de la sécurité informatique et de la cybersécurité", place: "LinkedIn", year: "2025" },
      { title: "Certificat pour la préparation de carrière dans la cybersécurité", place: "Microsoft et LinkedIn", year: "2025" },
    ],
  };

  return (
    <div className={`flex flex-col items-center justify-center px-6 py-10 ${darkMode ? styles.textDark : styles.textLight}`}>
      <h1 className="text-3xl font-bold text-center">Expérience et études</h1>
      <p className="text-lg text-gray-500 mb-6">Mon parcours personnel</p>

      {/* Tabs */}
      <div className="flex space-x-6 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition duration-300 ${activeTab === tab.id ? styles.tabButtonActive : "text-gray-500"}`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>
        {data[activeTab].map((item, index) => (
          <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.timelineItemReverse : ""}`}>
            <div className="w-1/2 px-6 text-right">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500">{item.place}</p>
              <p className="text-sm text-gray-400">📅 {item.year}</p>
            </div>
            <div className={styles.timelineItemDot}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
