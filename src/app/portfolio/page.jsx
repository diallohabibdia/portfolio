"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Site web pour un hôpital",
    technologies: "HTML, CSS, JavaScript",
    description: "Un site web permettant la prise de rendez-vous en ligne pour un hôpital.",
    logiciels: "VS Code, Figma, GitHub",
    image: "/images/hopital-site.png",  // Remplace avec ton vrai lien d'image
    github: "https://github.com/ton-profil/hopital-site"
  },
  {
    title: "Application Android de location de voiture",
    technologies: "Kotlin, Java",
    description: "Une application mobile intuitive pour la location de voitures.",
    logiciels: "Android Studio, GitHub, Firebase",
    image: "/images/location-voiture-app.png",  // Remplace avec ton vrai lien d'image
    github: "https://github.com/ton-profil/location-voiture-app"
  },
  {
    title: "Projet final portant sur la creation d'une application de gestion de notes",
    technologies: "C#",
    description: "Un projet final pour la création d'une application de gestion de notes en C#.",
    logiciels: "Visual Studio, GitHub",
    image: "/images/gestion-notes.png",  // Remplace avec ton vrai lien d'image
    github: "https://github.com/ton-profil/gestion-notes" 
  },
  {
    title: "Application de bureau pour la gestion des stocks",
    technologies: "C#, WPF",
    description: "Une application desktop pour gérer les stocks et les commandes en entreprise.",
    logiciels: "Visual Studio, SQL Server, GitHub",
    image: "/images/gestion-stock.png",  // Remplace avec ton vrai lien d'image
    github: "https://github.com/ton-profil/gestion-stock"
  },
  {
    title: "Application web de gestion immobilière",
    technologies: "React.js, Node.js",
    description: "Une application web permettant la gestion des biens immobiliers et des locations.",
    logiciels: "VS Code, Postman, MongoDB, GitHub",
    image: "/images/gestion-immo.png",  // Remplace avec ton vrai lien d'image
    github: "https://github.com/ton-profil/gestion-immo"
  }
];

export default function Portfolio() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-900">Portfolio</h2>
      <p className="text-center text-gray-600 mb-6">Mes projets récents</p>

      {projects.map((project, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <button
            className="w-full flex justify-between items-center text-left font-semibold text-lg transition-all duration-300 hover:text-blue-600"
            onClick={() => toggleAccordion(index)}
          >
            {project.title}
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {openIndex === index && (
            <div className="mt-2 text-gray-700 transition-all duration-300">
              <p className="font-semibold">Technologies: {project.technologies}</p>
              <p className="font-semibold">Logiciels utilisés: {project.logiciels}</p>
              <p>{project.description}</p>

              {/* Affichage de l'image */}
              <div className="my-2">
                <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-md" />
              </div>

              {/* Lien GitHub */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:text-blue-700 font-semibold"
              >
                <FaGithub className="mr-2" /> Voir le code sur GitHub
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
