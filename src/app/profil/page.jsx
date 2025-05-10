import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 text-gray-700">
      {/* Titre principal */}
      <h1 className="text-3xl font-bold text-center">Profil Professionnel</h1>
      <p className="text-lg text-gray-500 mb-6">Ma présentation</p>

      {/* Présentation */}
      <p className="text-lg text-center max-w-2xl leading-relaxed">
        Étudiant en dernière année en programmation, passionné par le développement logiciel 
        et les nouvelles technologies. Curieux et motivé, j’ai acquis de solides compétences en 
        <strong> développement web et mobile (React, Next.js, Java, Kotlin, C#) </strong> à travers mes études 
        et projets académiques. Capable d’apprendre rapidement, je suis à l’aise en travail d’équipe 
        et en autonomie. Je suis à la recherche d’une première expérience professionnelle pour 
        mettre en pratique mes compétences et continuer à progresser.
      </p>

      <div className="flex justify-center space-x-16 my-10">
        <div className="text-center">
          <span className="text-2xl font-bold">05+</span>
          <p className="text-sm">Projets académiques réalisés</p>
        </div>
        <div className="text-center">
          <span className="text-2xl font-bold">02+</span>
          <p className="text-sm">Langages maîtrisés</p>
        </div>
        <div className="text-center">
          <span className="text-2xl font-bold">Bientôt diplômé 🎓</span>
          <p className="text-sm">Programmation - La Cité</p>
        </div>
      </div>

      <a
        href="/Diallo, Habib_CV.pdf" // Lien de téléchargement
        download ="Habib, Diallo_CV.pdf" // Nom du fichier téléchargé
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center"
      >
        Télécharger mon CV <span className="ml-2">📥</span>
      </a>
    </div>
  );
};

export default ProfilePage;
