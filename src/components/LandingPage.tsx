import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, HelpCircle, Heart, Mail } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle email subscription
    setEmail('');
    setShowEmailInput(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">We're Here to Help You</h1>
        <p className="text-xl text-gray-600">
          Getting protection shouldn't be complicated. We'll guide you through it, step by step.
        </p>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-red-500" size={28} />
          <h2 className="text-2xl font-semibold">What We Do</h2>
        </div>
        <p className="mb-4 text-lg">
          We help you fill out the paperwork for a restraining order in California. 
          No legal jargon, no confusion - just straightforward help when you need it most.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-medium">We'll help you with:</p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <Shield className="text-blue-600" size={20} />
              Getting protection from domestic violence
            </li>
            <li className="flex items-center gap-2">
              <Shield className="text-blue-600" size={20} />
              Filing restraining order forms
            </li>
            <li className="flex items-center gap-2">
              <Shield className="text-blue-600" size={20} />
              Understanding what happens next
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="text-red-500" />
          <h2 className="text-xl font-semibold">In Immediate Danger?</h2>
        </div>
        <p className="text-red-700">
          Call 911 right now. Your safety comes first. For 24/7 support, the National Domestic 
          Violence Hotline is here: 1-800-799-SAFE (7233)
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <HelpCircle className="text-green-600" size={28} />
          <h2 className="text-2xl font-semibold">How It Works</h2>
        </div>
        <div className="space-y-4">
          <p className="text-lg">
            We've made it simple. You'll only need to:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-green-100 text-green-800 font-medium px-3 py-1 rounded-full">1</span>
              Answer basic questions in plain language
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-100 text-green-800 font-medium px-3 py-1 rounded-full">2</span>
              Get your forms filled out automatically
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-100 text-green-800 font-medium px-3 py-1 rounded-full">3</span>
              Take them to your local court
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Mail className="text-blue-600" size={24} />
          <h2 className="text-xl font-semibold">Stay Updated</h2>
        </div>
        {!showEmailInput ? (
          <div>
            <p className="mb-4">
              We're constantly working on new ways to help. Want to know when we add new features?
            </p>
            <button 
              onClick={() => setShowEmailInput(true)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Keep me in the loop
            </button>
          </div>
        ) : (
          <form onSubmit={handleEmailSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <div className="flex gap-3">
              <button 
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </button>
              <button 
                type="button"
                onClick={() => setShowEmailInput(false)}
                className="text-gray-600 hover:text-gray-700"
              >
                No thanks
              </button>
            </div>
            <p className="text-sm text-gray-500">
              We respect your privacy. You can unsubscribe anytime.
            </p>
          </form>
        )}
      </div>

      <div className="text-center">
        <Link 
          to="/form" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
        >
          Start Now
          <Heart size={20} />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
