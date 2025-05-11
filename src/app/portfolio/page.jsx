"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Site web pour un hôpital",
    technologies: "HTML, CSS, JavaScript",
    description: "Un site web permettant la prise de rendez-vous en ligne pour un hôpital.",
    logiciels: "VS Code, Figma, GitHub",
    image: [
      "/images/halfcare.png",
      "/images/halfcare2.png",
      "/images/halfcare3.png"
    ],
    github: "https://github.com/ton-profil/hopital-site"
  },
  {
    title: "Application Android de location de voiture",
    technologies: "Kotlin, Java",
    description: "Une application mobile intuitive pour la location de voitures.",
    logiciels: "Android Studio, GitHub, Firebase",
    image: ["/images/rentCar.png"],
    github: "https://github.com/ton-profil/location-voiture-app"
  },
  {
    title: "Projet final portant sur la création d'une application de gestion de notes",
    technologies: "C#",
    description: "Un projet final pour la création d'une application de gestion de notes en C#.",
    logiciels: "Visual Studio, GitHub",
    image: ["/images/gestion-notes.png"],
    github: "https://github.com/ton-profil/gestion-notes"
  },
  {
    title: "Application de bureau pour la gestion des stocks",
    technologies: "C#, WPF",
    description: "Une application desktop pour gérer les stocks et les commandes en entreprise.",
    logiciels: "Visual Studio, SQL Server, GitHub",
    image: ["/images/gestion-stock.png"],
    github: "https://github.com/diallohabib/Gestion-des-stocks-pour-une-boutique"
  },
  {
    title: "Application web de gestion immobilière",
    technologies: "React.js, Node.js",
    description: "Une application web permettant la gestion des biens immobiliers et des locations.",
    logiciels: "VS Code, Postman, MongoDB, GitHub",
    image: ["/images/gestion-immo.png"],
    github: "https://github.com/diallohabibdia/gestion-immobiliere"
  },
  {
    title: "Application mobile de réservation de salles d'une université",
    technologies: "React Native, Expo, TypeScript",
    description: "Une application mobile pour la réservation de salles dans une université.",
    logiciels: "Android Studio, GitHub",
    image: ["/images/reservation-app.png",
      "/images/reservation-app1.jpg",
      "/images/reservation-app4.jpg",
      "/images/reservation-app3.jpg",
    ],
    github: "https://github.com/zaidisiham/reservation-app"
  },
  {
    title: "Site web de réservation de salles d'une université",
    technologies: "React.js, Next.js",
    description: "Un site web pour la réservation de salles dans une université.",
    logiciels: "Visual Studio Code, Postman, MySQL, phpMyAdmin, GitHub",
    image: ["/images/reservation-site-web.png",
      "/images/reservation-site-web1.png",
      "/images/reservation-site-web0.png",
      "/images/reservation-site-web2.png"
    ],
    github: "https://github.com/zaidisiham/ResrvationDesSallesDansUneUniversite"
  },
  {
    title: "Application web d'événements",
    technologies: "Next.js, Tailwind",
    description: "Une application web pour gérer les événements et les inscriptions.",
    logiciels: "Visual Studio Code, GitHub",
    image: ["/images/boxevent.png",
      "/images/boxevent1.png"
    ],
    github: "https://github.com/JSH-Tech/boxevent"
  },
  {
    title: "Site web de portfolio",
    technologies: "HTML, CSS, JavaScript",
    description: "Un site web personnel pour présenter mes projets et compétences.",
    logiciels: "VS Code, GitHub",
    image: ["/images/portfolio.png"],
    github: "https://github.com/diallohabibdia/portfolio"
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
              <p className="font-semibold">Technologies : {project.technologies}</p>
              <p className="font-semibold">Logiciels utilisés : {project.logiciels}</p>
              <p>{project.description}</p>

              {/* Affichage des images */}
              <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.image.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} - image ${i + 1}`}
                    className="w-full rounded-lg shadow-md"
                  />
                ))}
              </div>

              {/* Lien GitHub */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:text-blue-700 font-semibold mt-2"
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
