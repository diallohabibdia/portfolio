"use client";
import { useState } from "react";
import { FaCode, FaServer, FaMobileAlt, FaDesktop, FaUsers, FaCogs, FaLanguage, FaDatabase, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
      { name: "Next.js", level: 80 }
    ]
  },
  {
    title: "Développeur Backend",
    icon: <FaServer />,
    experience: "",
    details: [
      { name: "Node.js (Express framework)", level: 85 },
      { name: "Python (Django framework)", level: 80 },
      { name: "PHP", level: 55 }
    ]
  },
  {
    title: "Développeur application pour mobile",
    icon: <FaMobileAlt />,
    experience: "",
    details: [
      { name: "Android - Java/Kotlin", level: 90 },
      { name: "React Native", level: 80 },
      { name: "Swift", level: 80 }
    ]
  },
  {
    title: "Développeur application de bureau",
    icon: <FaDesktop />,
    experience: "",
    details: [
      { name: "C# - WPF", level: 85 },
      { name: "Java - Swing", level: 80 },
    ]
  },
  {
    title: "Base de données",
    icon: <FaDatabase />,
    experience: "",
    details: [
      { name: "MySQL", level: 85 },
      { name: "SQL Server", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Cassandra", level: 70 }
    ]
  },
  {
    title: "Travail collaboratif",
    icon: <FaUsers />,
    experience: "",
    details: [
      { name: "Git", level: 80 },
      { name: "SCRUM", level: 80 },
      { name: "Github", level: 80 }
    ]
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

    ]
  },
  {
    title: "Langues",
    icon: <FaLanguage />,
    experience: "",
    details: [
      { name: "Français - Courant", level: 100 },
      { name: "Anglais - Intermédiaire", level: 40 },
    ]
  }
];

export default function Skills() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="text-center py-12 px-6 ">
      <h2 className="text-3xl font-bold text-gray-900">Savoir-faire et expertise</h2>
      <p className="text-gray-500 text-lg mb-8">Mon niveau technique</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <div className="flex items-center gap-3">
                <span className="text-blue-600 text-2xl">{skill.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                  <p className="text-gray-500">{skill.experience}</p>
                </div>
              </div>
              <span className="text-gray-600 text-lg">
                {openSections[index] ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {openSections[index] && (
              <ul className="mt-3 transition-all duration-500">
                {skill.details.map((detail, i) => (
                  <li key={i} className="mb-3">
                    <span className="block font-medium">{detail.name}</span>
                    {detail.level !== undefined && (
                      <div className="relative w-full bg-gray-300 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full transition-all duration-700"
                          style={{ width: `${detail.level}%` }}
                        ></div>
                        <span className="absolute right-0 top-0 text-xs font-semibold text-gray-700">{detail.level}%</span>
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
