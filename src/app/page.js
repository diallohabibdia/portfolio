"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaFolderOpen,
  FaMouse,
  FaGlobe,
} from "react-icons/fa";
import ProfilePage from "./profil/page";
import Skills from "./competences/page";
import Experience from "./experience/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";

export default function Home() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [language, setLanguage] = useState("fr");

  const translations = {
    fr: {
      accueil: "Accueil",
      profil: "Profil",
      competences: "Compétences",
      experience: "Expérience",
      portfolio: "Portfolio",
      contact: "Contact",
      hello: "Salut, je suis",
      role: "Développeur Full Stack React & Next.js | Ouvert aux opportunités",
      about:
        "Diplômé en programmation informatique, passionné par le développement web et mobile.",
      explore: "Explorer",
    },
    en: {
      accueil: "Home",
      profil: "Profile",
      competences: "Skills",
      experience: "Experience",
      portfolio: "Portfolio",
      contact: "Contact",
      hello: "Hi, I'm",
      role: "Full Stack Developer React & Next.js | Open to opportunities",
      about:
        "Graduated in computer programming, passionate about web and mobile development.",
      explore: "Explore",
    },
  };

  const sections = [
    "accueil",
    "profil",
    "competences",
    "experience",
    "portfolio",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-gray-900 dark:text-white bg-white dark:bg-gray-900 transition-colors duration-300">
      

      {/* SECTION ACCUEIL */}
      <section
        id="accueil"
        className="w-full max-w-5xl mt-20 flex flex-col md:flex-row items-center px-6"
      >
        <div className="relative flex flex-col items-center p-6">
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-md">
            <Image
              src="/images/profile.png"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/habib-diallo-042b11247"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 shadow-md"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/diallohabibdia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white transition duration-300 shadow-md"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300 shadow-md"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="text-center md:text-left md:ml-12 mt-8 md:mt-0 flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            {translations[language].hello}{" "}
            <span className="text-blue-600">Habib !</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-3">
            {translations[language].role}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-5 leading-relaxed">
            {translations[language].about}
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-blue-700 transition"
            >
              <FaEnvelope size={20} /> {translations[language].contact}
            </a>
            <a
              href="#portfolio"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-blue-800 transition"
            >
              <FaFolderOpen size={20} /> {translations[language].portfolio}
            </a>
          </div>
        </div>
      </section>

      <div
        className="flex flex-col items-center text-blue-600 cursor-pointer mt-10"
        onClick={() => scrollToSection("profil")}
      >
        <div className="flex items-center gap-2 animate-bounce">
          <FaMouse size={20} />
          <span className="text-lg font-medium">
            {translations[language].explore}
          </span>
        </div>
        <span className="text-sm">⬇</span>
      </div>

      <div id="profil" className="mt-16 w-full max-w-5xl">
        <ProfilePage />
      </div>
      <div id="competences" className="mt-16 w-full max-w-5xl">
        <Skills />
      </div>
      <div id="experience" className="mt-16 w-full max-w-5xl">
        <Experience />
      </div>
      <div id="portfolio" className="mt-16 w-full max-w-5xl">
        <Portfolio />
      </div>
      <div id="contact" className="mt-16 w-full max-w-5xl">
        <Contact />
      </div>
    </div>
  );
}
