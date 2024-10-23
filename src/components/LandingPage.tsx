import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, HelpCircle } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to California DVTRO Assistance</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Shield className="mr-2" /> Our Mission
        </h2>
        <p className="mb-4">
          We're here to help you navigate the process of obtaining a Domestic Violence Temporary Restraining Order (DVTRO) in California. Our goal is to make this process less stressful and more accessible to those who need protection.
        </p>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <AlertTriangle className="mr-2" /> Important Disclaimer
        </h2>
        <ul className="list-disc list-inside">
          <li>We are not lawyers and do not provide legal advice.</li>
          <li>This service is for informational purposes only.</li>
          <li>If you're in immediate danger, please call 911.</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Who This Service Is For</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Individuals seeking protection from domestic violence</li>
          <li>Those who need help filling out DVTRO forms</li>
          <li>People looking for information about the DVTRO process</li>
        </ul>
        <p className="font-semibold">This service is not for:</p>
        <ul className="list-disc list-inside">
          <li>Alleged perpetrators of domestic violence</li>
          <li>Divorce-related questions</li>
          <li>Child support issues</li>
        </ul>
      </div>

      <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <HelpCircle className="mr-2" /> How We Can Help
        </h2>
        <ul className="list-disc list-inside">
          <li>Guide you through filling out DVTRO forms using plain language</li>
          <li>Provide information about the court process</li>
          <li>Offer resources for next steps after filing</li>
        </ul>
      </div>

      <div className="text-center">
        <Link to="/form" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
          Start DVTRO Form Process
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;