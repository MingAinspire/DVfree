import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, MapPin, Phone, ArrowLeft, Clock, Shield, AlertTriangle, HelpCircle, Check } from 'lucide-react';

const CourtInfo: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4">What Happens at Court</h1>
        
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

        {/* What to Bring */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="text-blue-600" />
            <h2 className="text-xl font-semibold">What to Bring</h2>
          </div>
          <ul className="space-y-3 ml-6">
            <li className="flex items-center gap-2">
              <Check size={18} className="text-green-500 flex-shrink-0" />
              <span>Your completed forms (we'll help you get these ready)</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-green-500 flex-shrink-0" />
              <span>Valid photo ID (driver's license, state ID, or passport)</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-green-500 flex-shrink-0" />
              <span>Any evidence you have (photos, messages, police reports)</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-green-500 flex-shrink-0" />
              <span>A support person (friend or family member) if you'd like</span>
            </li>
          </ul>
        </div>

        {/* What to Expect */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="text-blue-600" />
            <h2 className="text-xl font-semibold">What to Expect</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">1. Arriving at Court</h3>
              <p>Go through security, then find the clerk's office. They'll help you file your forms.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">2. Filing Your Forms</h3>
              <p>The clerk will process your forms and may ask you to wait for a judge to review them.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">3. Getting Your Orders</h3>
              <p>If approved, you'll get your temporary orders the same day in most cases.</p>
            </div>
          </div>
        </div>

        {/* Helpful Tips */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="text-blue-600" />
            <h2 className="text-xl font-semibold">Helpful Tips</h2>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg space-y-3">
            <p>• Arrive early - give yourself plenty of time</p>
            <p>• Dress neatly - business casual is appropriate</p>
            <p>• Turn off your phone before entering courtrooms</p>
            <p>• Speak clearly and respectfully to court staff</p>
            <p>• Ask questions if you're unsure about anything</p>
          </div>
        </div>

        {/* Support Available */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="text-blue-600" />
            <h2 className="text-xl font-semibold">Support Available</h2>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="mb-3">Many courts have these free services:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-green-600" />
                <span>Self-Help Center staff to answer questions</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield size={18} className="text-green-600" />
                <span>Security escorts if you feel unsafe</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-green-600" />
                <span>Domestic violence advocates</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            to="/preparation" 
            className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            <ArrowLeft className="mr-2" /> Back to Preparation Steps
          </Link>
          <Link 
            to="/" 
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            Continue <Check size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourtInfo;
