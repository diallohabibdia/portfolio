"use client";
import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", icon: <FaGraduationCap />, label: "Éducation" },
    { id: "work", icon: <FaBriefcase />, label: "Travail" },
    { id: "certificates", icon: <FaCertificate />, label: "Certificats" },
  ];

  const data = {
    education: [
      { title: "DEC en Programmation Informatique", place: "Collège La Cité, Ottawa, Canada", year: "2024 - 2025" },
      { title: "Baccalaureat en Informatique", place: "Université du Quebec a Chicoutimi, Quebec, Canada", year: "2022 - 2023" },
      { title: "Licence en Economie Finance", place: "Université Générale Lansana Conté de Sonfonia, Conakry", year: "2019 - 2022" },
    ],
    work: [
      { title: "Marchandiseur", place: "IMPACTDETAIL", year: "Mars 2024 - Decembre 2024" },
      { title: "Pré-assembleur", place: "Pepsico", year: "Aout 2023 - Decembre 2023" },
      { title: "Marchandiseur", place: "Pepsico", year: "Avril 2023 - Aout 2023" },
      { title: "Approvisionement de nuit", place: "Walmart",year: "Septembre 2022 - Avril 2023" }, 
    ],
    certificates: [
      { title: "Certification en fondements de la sécurité informatique et de la cybersécurité", place: "LinkedIn", year: "2025" },
      { title: "Certificat pour la Préparation de carrière dans la cybersécurité ", place: "Microsoft et LinkedIn", year: "2025" },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 text-gray-700">
      <h1 className="text-3xl font-bold text-center">Expérience et études</h1>
      <p className="text-lg text-gray-500 mb-6">Mon parcours personnel</p>

      {/* Tabs */}
      <div className="flex space-x-6 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition duration-300 ${
              activeTab === tab.id ? "text-blue-600 font-bold" : "text-gray-500"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>
        {data[activeTab].map((item, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? "flex-row-reverse" : ""} items-center mb-8 relative`}>
            <div className="w-1/2 px-6 text-right">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500">{item.place}</p>
              <p className="text-sm text-gray-400">📅 {item.year}</p>
            </div>
            <div className="w-6 h-6 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
