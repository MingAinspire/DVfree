import React, { useState } from 'react';
import { Heart, HelpCircle, Lock, Mail, FileText, ChevronRight } from 'lucide-react';

const FormProcess: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [showHelp, setShowHelp] = useState<string | null>(null);
  const [wantsEmailCopy, setWantsEmailCopy] = useState(false);
  const [wantsUpdates, setWantsUpdates] = useState(false);
  const [email, setEmail] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Form Overview */}
      <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="text-blue-600" size={24} />
          <h2 className="text-2xl font-semibold">Your Forms</h2>
        </div>
        <div className="space-y-3">
          <p className="text-gray-600">We'll help you fill out:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>DV-109 (Notice of Court Hearing) - Just sections 1-2</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>DV-110 (Temporary Restraining Order) - Just sections 1-3</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>CLETS-001 - Basic information only</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="mb-8 bg-blue-50 p-4 rounded-lg flex items-start gap-3">
        <Lock className="text-blue-600 mt-1" />
        <div>
          <h3 className="font-medium text-blue-800">Your Privacy & Safety Matter</h3>
          <p className="text-blue-600">
            We never collect sensitive information like social security numbers or financial details.
            Your information is only used to fill out your forms and isn't stored after you're done.
          </p>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="grid grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="col-span-2 bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-8">
            {/* Warm Welcome */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-medium text-gray-800 mb-3">
                Let's Get Started
              </h2>
              <p className="text-gray-600">
                We'll guide you through this step by step. Take your time - you can save and 
                come back anytime.
              </p>
            </div>

            {/* Basic Information */}
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium mb-2">
                  What's your name? 
                  <span className="text-sm text-gray-500 ml-2">As you'd like it to appear on the forms</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Your full legal name"
                  onChange={handleInputChange}
                  value={formData.fullName || ''}
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2">
                  Who do you need protection from?
                  <span className="text-sm text-gray-500 ml-2">Their name will appear on the restraining order</span>
                </label>
                <input
                  type="text"
                  name="restrained_person"
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="Their full name"
                  onChange={handleInputChange}
                  value={formData.restrained_person || ''}
                />
              </div>

              {/* Email Options */}
              <div className="mt-8 bg-gray-50 p-4 rounded-lg space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="text-gray-600" />
                    <label className="text-lg font-medium">
                      Would you like your forms emailed to you?
                    </label>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={wantsEmailCopy}
                      onChange={(e) => setWantsEmailCopy(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-gray-600">Yes, email me a copy of my forms</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={wantsUpdates}
                      onChange={(e) => setWantsUpdates(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-gray-600">Keep me updated about new features and improvements</span>
                  </div>
                </div>

                {(wantsEmailCopy || wantsUpdates) && (
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 mt-2"
                  />
                )}
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="text-yellow-600" />
                <span className="font-medium">Helpful Tips</span>
              </div>
              <ul className="space-y-2 text-sm text-yellow-800">
                <li>• Using a public computer? We recommend having the forms emailed to you.</li>
                <li>• Take breaks whenever you need - your progress is saved.</li>
                <li>• Don't worry about getting everything perfect - we'll guide you through it.</li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Save & Take a Break
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                Continue
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Side Panel - Progress & Tips */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-medium text-lg mb-4">Your Progress</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">Basic Information</span>
            </li>
            <li className="flex items-center gap-2 text-gray-500">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span>DV-109 Details</span>
            </li>
            <li className="flex items-center gap-2 text-gray-500">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span>DV-110 Details</span>
            </li>
            <li className="flex items-center gap-2 text-gray-500">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span>CLETS-001 Details</span>
            </li>
            <li className="flex items-center gap-2 text-gray-500">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span>Review & Download</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormProcess;
