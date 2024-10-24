import React, { useState } from 'react';

interface DV110FormData {
  caseNumber?: string;
  fullName?: string;
  address?: string;
  telephone?: string;
  emailAddress?: string;
  lawyerName?: string;
  lawyerBarNumber?: string;
  lawyerFirmName?: string;
  restrainedPersonName?: string;
}

const DV110Form: React.FC = () => {
  const [formData, setFormData] = useState<DV110FormData>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopy = () => {
    const dataToCopy = `Case Number: ${formData.caseNumber || ''}
Full Name: ${formData.fullName || ''}
Address: ${formData.address || ''}
Telephone: ${formData.telephone || ''}
Email Address: ${formData.emailAddress || ''}
Lawyer Name: ${formData.lawyerName || ''}
State Bar No.: ${formData.lawyerBarNumber || ''}
Firm Name: ${formData.lawyerFirmName || ''}
Restrained Person Name: ${formData.restrainedPersonName || ''}`;
    navigator.clipboard.writeText(dataToCopy).then(() => {
      alert('Data copied to clipboard!');
    });
  };

  return (
    <div>
      <h2>DV-110 (Sections 1-3)</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="caseNumber" className="block text-sm font-medium mb-1">Case Number:</label>
          <input type="text" id="caseNumber" name="caseNumber" onChange={handleInputChange} value={formData.caseNumber || ''} />
        </div>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name:</label>
          <input type="text" id="fullName" name="fullName" onChange={handleInputChange} value={formData.fullName || ''} />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">Address:</label>
          <textarea id="address" name="address" onChange={handleInputChange} value={formData.address || ''} />
        </div>
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium mb-1">Telephone:</label>
          <input type="tel" id="telephone" name="telephone" onChange={handleInputChange} value={formData.telephone || ''} />
        </div>
        <div>
          <label htmlFor="emailAddress" className="block text-sm font-medium mb-1">Email Address:</label>
          <input type="email" id="emailAddress" name="emailAddress" onChange={handleInputChange} value={formData.emailAddress || ''} />
        </div>
        <div>
          <label htmlFor="lawyerName" className="block text-sm font-medium mb-1">Lawyer Name:</label>
          <input type="text" id="lawyerName" name="lawyerName" onChange={handleInputChange} value={formData.lawyerName || ''} />
        </div>
        <div>
          <label htmlFor="lawyerBarNumber" className="block text-sm font-medium mb-1">State Bar No.:</label>
          <input type="text" id="lawyerBarNumber" name="lawyerBarNumber" onChange={handleInputChange} value={formData.lawyerBarNumber || ''} />
        </div>
        <div>
          <label htmlFor="lawyerFirmName" className="block text-sm font-medium mb-1">Firm Name:</label>
          <input type="text" id="lawyerFirmName" name="lawyerFirmName" onChange={handleInputChange} value={formData.lawyerFirmName || ''} />
        </div>
        <div>
          <label htmlFor="restrainedPersonName" className="block text-sm font-medium mb-1">Restrained Person Name:</label>
          <input type="text" id="restrainedPersonName" name="restrainedPersonName" onChange={handleInputChange} value={formData.restrainedPersonName || ''} />
        </div>
        <button onClick={handleCopy}>Copy Data to Clipboard</button>
      </div>
    </div>
  );
};

export default DV110Form;
