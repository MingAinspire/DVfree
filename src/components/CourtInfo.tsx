import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, MapPin, Phone, ArrowLeft } from 'lucide-react';

const CourtInfo: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Next Steps and Court Information</h1>
      
      {/* ... (keep existing content) */}

      <div className="mt-8 flex justify-between items-center">
        <Link to="/preparation" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="mr-2" /> Back to Preparation Steps
        </Link>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to Home Page
        </Link>
      </div>
    </div>
  );
};

export default CourtInfo;