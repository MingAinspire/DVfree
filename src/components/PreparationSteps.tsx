import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Download, CheckCircle } from 'lucide-react';
import CountyInfo from './CountyInfo';

// ... (keep existing preparationSteps array)

const PreparationSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [zipCode, setZipCode] = useState('');
  const [showCountyInfo, setShowCountyInfo] = useState(false);

  // ... (keep existing handleNext and handlePrevious functions)

  const handleZipCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCountyInfo(true);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Preparing for Your DVTRO</h1>
      
      {!showCountyInfo ? (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{preparationSteps[currentStep].title}</h2>
            <p className="mb-4">{preparationSteps[currentStep].content}</p>
          </div>

          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
            >
              <ChevronLeft className="mr-2" /> Previous
            </button>
            <span className="text-sm text-gray-500">
              Step {currentStep + 1} of {preparationSteps.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentStep === preparationSteps.length - 1}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Next <ChevronRight className="ml-2" />
            </button>
          </div>

          {currentStep === preparationSteps.length - 1 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">You're All Set!</h2>
              <p className="mb-4">
                You've completed all the preparation steps. Now, let's find your local court information.
              </p>
              <form onSubmit={handleZipCodeSubmit} className="mb-4">
                <label htmlFor="zipCode" className="block mb-2">Enter your ZIP code:</label>
                <div className="flex">
                  <input
                    type="text"
                    id="zipCode"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="border rounded-l px-4 py-2 w-full"
                    required
                  />
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Want more information?</h3>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Opt-in to receive additional resources and support via email</span>
            </label>
          </div>
        </>
      ) : (
        <CountyInfo zipCode={zipCode} />
      )}
    </div>
  );
};

export default PreparationSteps;