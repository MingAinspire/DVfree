import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FormSubmission from './FormSubmission';

const questions = [
  {
    question: 'What is your name?',
    type: 'text',
    helpText: 'Please enter your full legal name.',
  },
  {
    question: 'What is your address?',
    type: 'textarea',
    helpText: 'Please enter your current residential address.',
  },
  {
    question: 'What is your phone number?',
    type: 'text',
    helpText: 'Please enter a valid phone number where you can be reached.',
  },
  {
    question: 'Please describe the incident.',
    type: 'textarea',
    helpText: 'Provide a detailed description of the incident.',
  },
  {
    question: 'Do you have any evidence to support your claim?',
    type: 'textarea',
    helpText: 'List any evidence you have, such as photos, videos, or witness statements.',
  },
  {
    question: 'What is the name of the person you are filing against?',
    type: 'text',
    helpText: 'Please enter the full legal name of the person you are filing against.',
  },
  {
    question: 'What is the relationship between you and the person you are filing against?',
    type: 'textarea',
    helpText: 'Describe your relationship with the person you are filing against.',
  },
  {
    question: 'What is the date of the incident?',
    type: 'text',
    helpText: 'Please enter the date when the incident occurred.',
  },
  {
    question: 'What is the location of the incident?',
    type: 'textarea',
    helpText: 'Please provide the location where the incident took place.',
  },
  {
    question: 'What actions do you want the court to take?',
    type: 'textarea',
    helpText: 'Describe the actions you want the court to take, such as issuing a restraining order.',
  },
  {
    question: 'Do you have any additional information to provide?',
    type: 'textarea',
    helpText: 'Provide any additional information that may be relevant to your case.',
  },
  {
    question: 'Do you need any special accommodations?',
    type: 'textarea',
    helpText: 'List any special accommodations you may need, such as an interpreter or wheelchair access.',
  },
  {
    question: 'Please review your information before submitting.',
    type: 'textarea',
    helpText: 'Review all the information you have provided to ensure it is accurate and complete.',
  },
  {
    question: 'DV100 Form: What is your date of birth?',
    type: 'text',
    helpText: 'Please enter your date of birth as it appears on your ID.',
  },
];

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
