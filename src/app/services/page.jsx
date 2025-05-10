"use client";
import React, { useState } from "react";
import { FaCode, FaDatabase, FaDesktop, FaMobileAlt, FaBug, FaProjectDiagram } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

const services = [
  {
    id: 1,
    title: "Développeur Backend",
    icon: <FaDatabase className="text-blue-500 text-3xl" />,
    description: "Je maîtrise le développement backend avec Node.js, Express, et des bases de données SQL/NoSQL.",
  },
  {
    id: 2,
    title: "Développeur Frontend",
    icon: <FaCode className="text-blue-500 text-3xl" />,
    description: "Je développe des interfaces modernes et responsives avec React.js, Next.js et Tailwind CSS.",
  },
  {
    id: 3,
    title: "Développeur d'application de bureau",
    icon: <FaDesktop className="text-blue-500 text-3xl" />,
    description: "Développement d'applications performantes avec C# et WPF pour une expérience utilisateur fluide.",
  },
  {
    id: 4,
    title: "Développeur d'application mobile",
    icon: <FaMobileAlt className="text-blue-500 text-3xl" />,
    description: "Création d'applications mobiles intuitives avec React Native et Flutter.",
  },
  {
    id: 5,
    title: "Ingénieur en tests logiciels",
    icon: <FaBug className="text-blue-500 text-3xl" />,
    description: "Assurance qualité logicielle avec des tests automatisés et manuels.",
  },
  {
    id: 6,
    title: "Consultant en gestion de projet IT",
    icon: <FaProjectDiagram className="text-blue-500 text-3xl" />,
    description: "Planification et supervision des projets logiciels avec Agile/Scrum et outils comme Jira & Ms-Project.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="py-16 px-6 text-gray-800">
      <h1 className="text-4xl font-extrabold text-center text-gray-900">Services</h1>
      <p className="text-lg text-center text-gray-600 mb-10">Ce que j'offre</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start space-y-4 cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => setSelectedService(service)}
            role="button"
            tabIndex={0}
            aria-label={`En savoir plus sur ${service.title}`}
          >
            {service.icon}
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <button className="text-blue-600 flex items-center hover:underline">
              En savoir plus →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <Dialog open={!!selectedService} onClose={() => setSelectedService(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Fermer le modal"
            >
              <span aria-hidden="true">✖</span>
            </button>
            <Dialog.Title className="text-2xl font-bold">{selectedService.title}</Dialog.Title>
            <Dialog.Description className="text-gray-600 mt-4 flex items-center">
              <span className="mr-2">✅</span> {selectedService.description}
            </Dialog.Description>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
};

export default Services;
