"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaGlobe } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("FR");
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [darkMode, setDarkMode] = useState(false);

  // Liste des liens avec labels dynamiques selon la langue
  const links = [
    { label: language === "FR" ? "Accueil" : "Home", id: "accueil" },
    { label: language === "FR" ? "Profil" : "Profile", id: "profil" },
    { label: language === "FR" ? "Compétences" : "Skills", id: "competences" },
    { label: language === "FR" ? "Expérience" : "Experience", id: "experience" },
    { label: language === "FR" ? "Portfolio" : "Portfolio", id: "portfolio" },
    { label: language === "FR" ? "Contact" : "Contact", id: "contact" },
  ];

  // Détecte si on est en mobile selon la largeur de fenêtre
  const checkIfMobile = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  }, []);

  // Gestion du dark mode via media query
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);

    const listener = (e) => setDarkMode(e.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", listener);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(listener);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", listener);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(listener);
      }
    };
  }, []);

  // Ajoute ou retire la classe dark sur <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Met à jour isMobile au chargement et à la redimension
  useEffect(() => {
    setIsMobile(checkIfMobile());

    const handleResize = () => setIsMobile(checkIfMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [checkIfMobile]);

  // Empêche le scroll du body quand menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = isMobile && open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, isMobile]);

  // Charge la langue depuis localStorage au montage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("language");
      if (storedLang === "FR" || storedLang === "EN") setLanguage(storedLang);
    }
  }, []);

  // Change la langue et sauvegarde dans localStorage
  const toggleLanguage = () => {
    const newLang = language === "FR" ? "EN" : "FR";
    setLanguage(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLang);
    }
  };

  // Scroll en douceur vers une section, ferme menu mobile si ouvert
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (isMobile) setOpen(false);
    }
  };

  // Met à jour la section active selon la position du scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "accueil";

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + offsetHeight - 100
          ) {
            current = link.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 px-6 flex justify-between items-center z-50">
        {/* Logo */}
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("accueil");
          }}
        >
          <Image
            src="/images/monLogo.png"
            alt="Logo"
            width={100}
            height={50}
            priority
          />
        </a>

        {/* Menu desktop */}
        {!isMobile && (
          <div className="flex gap-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium hover:text-blue-600 ${
                  activeSection === link.id
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}

        {/* Switch langue desktop */}
        {!isMobile && (
          <div className="flex items-center gap-2">
            <FaGlobe
              className="cursor-pointer text-gray-700 dark:text-white"
              onClick={toggleLanguage}
              title="Changer langue"
            />
            <select
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
              className="border rounded p-1 bg-white dark:bg-gray-700 text-black dark:text-white"
            >
              <option value="FR">FR</option>
              <option value="EN">EN</option>
            </select>
          </div>
        )}

        {/* Burger mobile */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer menu" : "Ouvrir menu"}
            className="z-50 flex flex-col gap-1"
          >
            {!open ? (
              <>
                <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
                <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
                <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
              </>
            ) : (
              <IoMdClose size={28} className="text-black dark:text-white" />
            )}
          </button>
        )}
      </nav>

      {/* Menu mobile */}
      {isMobile && open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-end">
          <div
            className={`w-[40%] max-w-xs h-full p-6 flex flex-col gap-6 backdrop-blur-md shadow-xl
            ${
              darkMode
                ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-opacity-95 text-white"
                : "bg-white bg-opacity-90 text-gray-900"
            }`}
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-lg transition-colors duration-200 ${
                  activeSection === link.id
                    ? darkMode
                      ? "text-blue-400 font-semibold"
                      : "text-blue-600 font-semibold"
                    : darkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="flex items-center gap-2 mt-auto">
              <FaGlobe
                className={`cursor-pointer ${
                  darkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={toggleLanguage}
                title="Changer langue"
              />
              <select
                onChange={(e) => setLanguage(e.target.value)}
                value={language}
                className={`border rounded p-1 ${
                  darkMode
                    ? "border-gray-600 bg-gray-800 text-white"
                    : "border-gray-300 bg-white text-black"
                }`}
              >
                <option value="FR">FR</option>
                <option value="EN">EN</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
