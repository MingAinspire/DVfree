import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FormSubmission from './FormSubmission';

// ... (keep the existing questions array)

const FormProcess: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [showSubmission, setShowSubmission] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowSubmission(true);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  if (showSubmission) {
    return <FormSubmission />;
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">DVTRO Form Process</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{currentQuestion.question}</h2>
        {currentQuestion.type === 'text' && (
          <input
            type="text"
            name={`question_${currentStep}`}
            value={formData[`question_${currentStep}`] || ''}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        )}
        {currentQuestion.type === 'textarea' && (
          <textarea
            name={`question_${currentStep}`}
            value={formData[`question_${currentStep}`] || ''}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 h-32"
          />
        )}
      </div>
      {currentQuestion.helpText && (
        <div className="mb-4 flex items-start bg-blue-100 p-3 rounded">
          <AlertCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
          <p className="text-sm text-blue-800">{currentQuestion.helpText}</p>
        </div>
      )}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
        >
          <ArrowLeft className="mr-2" /> Previous
        </button>
        <button
          onClick={handleNext}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded"
        >
          {currentStep === questions.length - 1 ? 'Submit' : 'Next'} <ArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default FormProcess;