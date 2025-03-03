import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  // États pour la progression et l'étape actuelle
  const [projectProgress, setProjectProgress] = useState<number>(17); // Progression initiale à 17%
  const [currentStep, setCurrentStep] = useState<number>(1); // Étape initiale : 1 (Demande envoyée)

  // Fonction pour passer à l'étape suivante
  const goToNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      // Mettre à jour la progression en fonction de l'étape
      switch (currentStep + 1) {
        case 1:
          setProjectProgress(17);
          break;
        case 2:
          setProjectProgress(50);
          break;
        case 3:
          setProjectProgress(83);
          break;
        case 4:
          setProjectProgress(100);
          break;
        default:
          setProjectProgress(17);
      }
    }
  };

  // Fonction pour revenir à l'étape précédente
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Mettre à jour la progression en fonction de l'étape
      switch (currentStep - 1) {
        case 1:
          setProjectProgress(17);
          break;
        case 2:
          setProjectProgress(50);
          break;
        case 3:
          setProjectProgress(83);
          break;
        case 4:
          setProjectProgress(100);
          break;
        default:
          setProjectProgress(17);
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Mon Projet</h1>
      </div>

      {/* Barre de progression */}
      <div className="w-full bg-gray-200 rounded-full h-4 relative">
        <div
          className="bg-gradient-to-r from-orange-500 to-black text-white h-4 rounded-full"
          style={{ width: `${projectProgress}%` }}
        ></div>

        {/* Étiquettes des étapes */}
        <div className="flex justify-between mt-2">
          <span className="text-sm text-gray-600">Demande envoyée</span>
          <span className="text-sm text-gray-600">En cours de confection</span>
          <span className="text-sm text-gray-600">En cours de livraison</span>
          <span className="text-sm text-gray-600">Projet livré</span>
        </div>
      </div>

      {/* Boutons pour naviguer entre les étapes */}
      <div className="flex justify-between mt-6">
        <button
          onClick={goToPreviousStep}
          disabled={currentStep === 1}
          className="ppx-4 py-2 bg-gradient-to-l from-orange-500 to-black text-white rounded-lg disabled:opacity-50"
        >
          Étape précédente
        </button>
        <button
          onClick={goToNextStep}
          disabled={currentStep === 4}
          className="px-4 py-2 bg-gradient-to-r from-orange-500 to-black text-white rounded-lg disabled:opacity-50"
        >
          Étape suivante
        </button>
      </div>

      {/* Affichage de l'étape actuelle */}
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold text-gray-800">
          Étape actuelle : {currentStep}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;