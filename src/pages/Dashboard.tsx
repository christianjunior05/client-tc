import React, { useState } from 'react';
import { Mail, Package, Truck, CheckCircle, Box } from 'lucide-react'; // Ajout de l'icône Box

const Dashboard: React.FC = () => {
  // États pour la progression et l'étape actuelle
  const [projectProgress, setProjectProgress] = useState<number>(17); // Progression initiale à 17%
  const [currentStep, setCurrentStep] = useState<number>(1); // Étape initiale : 1 (Demande envoyée)

  const steps = [
    { id: 1, name: 'Demande envoyée', progress: 20, icon: <Mail size={20} /> },
    { id: 2, name: 'En cours de confection', progress: 40, icon: <Package size={20} /> },
    { id: 3, name: '3D', progress: 60, icon: <Box size={20} /> }, // Nouvelle étape "3D"
    { id: 4, name: 'En cours de livraison', progress: 80, icon: <Truck size={20} /> },
    { id: 5, name: 'Projet livré', progress: 100, icon: <CheckCircle size={20} /> },
  ];

  // Fonction pour passer à l'étape suivante
  const goToNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      setProjectProgress(steps[currentStep].progress);
    }
  };

  // Fonction pour revenir à l'étape précédente
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setProjectProgress(steps[currentStep - 2].progress);
    }
  };

  return (
    <div className="space-y-8 p-4 md:p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Mon Projet</h1>
      </div>

      {/* Progress Stepper */}
      <div className="w-full">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex-1">
              <div className={`relative mb-2 ${index < steps.length - 1 ? 'pr-4' : ''}`}>
                <div className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= step.id ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 ${currentStep > step.id ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
                  )}
                </div>
              </div>
              <div className="text-sm text-gray-600">{step.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Boutons pour naviguer entre les étapes */}
      <div className="flex justify-between mt-6">
        <button
          onClick={goToPreviousStep}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-gradient-to-l from-orange-500 to-black text-white rounded-lg disabled:opacity-50"
        >
          Étape précédente
        </button>
        <button
          onClick={goToNextStep}
          disabled={currentStep === steps.length}
          className="px-4 py-2 bg-gradient-to-r from-orange-500 to-black text-white rounded-lg disabled:opacity-50"
        >
          Étape suivante
        </button>
      </div>

      {/* Affichage de l'étape actuelle */}
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold text-gray-800">
          Étape actuelle : {steps[currentStep - 1].name}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;