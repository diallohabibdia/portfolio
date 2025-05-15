"use client";
import { useState, useEffect } from "react";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDesktop,
  FaUsers,
  FaCogs,
  FaLanguage,
  FaDatabase,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import styles from './Competences.module.css'; // Import du CSS Module

const skills = [
  {
    title: "Développeur Frontend",
    icon: <FaCode />,
    experience: "",
    details: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    title: "Développeur Backend",
    icon: <FaServer />,
    experience: "",
    details: [
      { name: "Node.js (Express framework)", level: 85 },
      { name: "Python (Django framework)", level: 80 },
      { name: "PHP", level: 55 },
    ],
  },
  {
    title: "Développeur application pour mobile",
    icon: <FaMobileAlt />,
    experience: "",
    details: [
      { name: "Android - Java/Kotlin", level: 90 },
      { name: "React Native", level: 80 },
      { name: "Swift", level: 80 },
    ],
  },
  {
    title: "Développeur application de bureau",
    icon: <FaDesktop />,
    experience: "",
    details: [
      { name: "C# - WPF", level: 85 },
      { name: "Java - Swing", level: 80 },
    ],
  },
  {
    title: "Base de données",
    icon: <FaDatabase />,
    experience: "",
    details: [
      { name: "MySQL", level: 85 },
      { name: "SQL Server", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Cassandra", level: 70 },
    ],
  },
  {
    title: "Travail collaboratif",
    icon: <FaUsers />,
    experience: "",
    details: [
      { name: "Git", level: 80 },
      { name: "SCRUM", level: 80 },
      { name: "Github", level: 80 },
    ],
  },
  {
    title: "Logiciels",
    icon: <FaCogs />,
    experience: "",
    details: [
      { name: "VS Code", level: 90 },
      { name: "Android Studio", level: 85 },
      { name: "Postman", level: 80 },
      { name: "IntelliJ", level: 80 },
      { name: "Visual Studio", level: 80 },
      { name: "Xcode", level: 80 },
    ],
  },
  {
    title: "Langues",
    icon: <FaLanguage />,
    experience: "",
    details: [
      { name: "Français - Courant", level: 100 },
      { name: "Anglais - Intermédiaire", level: 40 },
    ],
  },
];

export default function Skills() {
  const [openSections, setOpenSections] = useState({});
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className={`${styles.section} ${theme === "dark" ? "dark" : "light"}`}>
      <h2 className={`${styles.title} ${theme === "dark" ? "text-white" : "text-black"}`}>
        Savoir-faire et expertise
      </h2>
      <p className={`${styles.subtitle} ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
        Mon niveau technique
      </p>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${styles.card} ${theme === "dark" ? styles.cardDark : styles.cardLight}`}
          >
            <div
              className={styles.header}
              onClick={() => toggleSection(index)}
            >
              <div className={styles.iconTitle}>
                <span className={`text-2xl ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                  {skill.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                  <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    {skill.experience}
                  </p>
                </div>
              </div>
              <span className={`${theme === "dark" ? "text-white" : "text-gray-600"} text-lg`}>
                {openSections[index] ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {openSections[index] && (
              <ul className="mt-3 transition-all duration-500">
                {skill.details.map((detail, i) => (
                  <li key={i} className="mb-3">
                    <span className="block font-medium">{detail.name}</span>
                    {detail.level !== undefined && (
                      <div
                        className={`relative w-full rounded-full h-2.5 ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"}`}
                      >
                        <div
                          className="bg-blue-600 h-2.5 rounded-full transition-all duration-700"
                          style={{ width: `${detail.level}%` }}
                        ></div>
                        <span
                          className={`absolute right-0 top-0 text-xs font-semibold ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                        >
                          {detail.level}%
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
