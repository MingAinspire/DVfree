import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Download, Loader, Send } from 'lucide-react';

const FormSubmission: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [isAcknowledged, setIsAcknowledged] = useState(false);
  const [formsReady, setFormsReady] = useState(false);

  useEffect(() => {
    // Simulate backend processing
    const processForm = async () => {
      // In a real application, this would trigger the Python script to process the forms
      await new Promise(resolve => setTimeout(resolve, 3000)); // Simulating 3 seconds of processing
      setIsProcessing(false);
      setFormsReady(true);
    };

    processForm();
  }, []);

  const handleAcknowledge = () => {
    setIsAcknowledged(true);
  };

  const handleDownload = () => {
    // In a real application, this would trigger the download of the compiled PDF
    console.log('Downloading forms...');
  };

  const handleSendEmail = () => {
    // In a real application, this would trigger sending the compiled PDF via email
    console.log('Sending forms via email...');
  };

  const handleDownloadDV100 = () => {
    // In a real application, this would trigger the download of the DV100 form
    console.log('Downloading DV100 form...');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Form Submission</h1>

      {isProcessing ? (
        <div className="flex flex-col items-center">
          <Loader className="animate-spin h-12 w-12 text-blue-600 mb-4" />
          <p>Processing your forms...</p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <CheckCircle className="h-12 w-12 text-green-600 mb-2" />
            <h2 className="text-xl font-semibold mb-2">Forms Processed Successfully</h2>
            <p>Your DVTRO forms have been compiled and are ready for download or to be sent via email.</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Acknowledgment</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isAcknowledged}
                onChange={handleAcknowledge}
                className="mr-2"
              />
              <span>
                I acknowledge that this service does not provide legal advice and that I have received legal edutainment only.
              </span>
            </label>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleDownload}
              disabled={!isAcknowledged}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Download className="mr-2" />
              Download Forms
            </button>
            <button
              onClick={handleSendEmail}
              disabled={!isAcknowledged}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Send className="mr-2" />
              Send via Email
            </button>
            <button
              onClick={handleDownloadDV100}
              disabled={!isAcknowledged}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Download className="mr-2" />
              Download DV100 Form
            </button>
          </div>

          <div className="mt-6">
            <Link to="/preparation" className="text-blue-600 hover:underline">
              Continue to Preparation Steps
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default FormSubmission;
