import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, AlertTriangle } from 'lucide-react';
import CountyInfo from './CountyInfo';

const preparationSteps = [
  {
    title: 'Safety First',
    content: 'If you are in immediate danger, call 911. If you need to talk to someone right now, the National Domestic Violence Hotline is available 24/7 at 1-800-799-SAFE (7233).'
  },
  {
    title: 'Take Care of Yourself',
    content: 'This process can be emotionally challenging. Remember to take breaks when you need them and stay connected with supportive people.'
  },
  {
    title: 'Know Your Rights',
    content: 'You have the right to be safe from violence and threats. You have the right to get help from the police and the courts.'
  }
];

const PreparationSteps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [zipCode, setZipCode] = useState('');
  const [showCountyInfo, setShowCountyInfo] = useState(false);

  const handleNext = () => {
    if (currentStep < preparationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleZipCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCountyInfo(true);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Before We Begin</h1>
      
      {!showCountyInfo ? (
        <div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex">
              <AlertTriangle className="text-red-500 mr-2 flex-shrink-0" />
              <div>
                <h3 className="text-red-800 font-semibold">Need Immediate Help?</h3>
                <p className="text-red-700">
                  If you're in immediate danger, call 911. For 24/7 support, call 1-800-799-SAFE (7233).
                </p>
              </div>
            </div>
          </div>

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
              <h2 className="text-xl font-semibold mb-4">Ready to Begin?</h2>
              <p className="mb-4">
                Let's find your local court information to help you get started.
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
                    pattern="[0-9]{5}"
                    maxLength={5}
                    placeholder="Enter 5-digit ZIP code"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-blue-600 text-white px-6 py-2 rounded-r hover:bg-blue-700"
                  >
                    Find Court
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      ) : (
        <CountyInfo zipCode={zipCode} />
      )}
    </div>
  );
};

export default PreparationSteps;
