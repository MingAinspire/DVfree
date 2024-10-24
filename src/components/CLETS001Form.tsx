import React, { useState } from 'react';

interface CLETS001FormData {
  fullName?: string;
  address?: string;
  telephone?: string;
  dateOfBirth?: string;
  driversLicenseNumber?: string;
  socialSecurityNumber?: string;
}

const CLETS001Form: React.FC = () => {
  const [formData, setFormData] = useState<CLETS001FormData>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopy = () => {
    const dataToCopy = `Full Name: ${formData.fullName || ''}
Address: ${formData.address || ''}
Telephone: ${formData.telephone || ''}
Date of Birth: ${formData.dateOfBirth || ''}
Driver's License Number: ${formData.driversLicenseNumber || ''}
Social Security Number: ${formData.socialSecurityNumber || ''}`;
    navigator.clipboard.writeText(dataToCopy).then(() => {
      alert('Data copied to clipboard!');
    });
  };

  return (
    <div>
      <h2>CLETS-001</h2>
      <div className="space-y-4">
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
          <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-1">Date of Birth:</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" onChange={handleInputChange} value={formData.dateOfBirth || ''} />
        </div>
        <div>
          <label htmlFor="driversLicenseNumber" className="block text-sm font-medium mb-1">Driver's License Number:</label>
          <input type="text" id="driversLicenseNumber" name="driversLicenseNumber" onChange={handleInputChange} value={formData.driversLicenseNumber || ''} />
        </div>
        <div>
          <label htmlFor="socialSecurityNumber" className="block text-sm font-medium mb-1">Social Security Number:</label>
          <input type="text" id="socialSecurityNumber" name="socialSecurityNumber" onChange={handleInputChange} value={formData.socialSecurityNumber || ''} />
        </div>
        <button onClick={handleCopy}>Copy Data to Clipboard</button>
      </div>
    </div>
  );
};

export default CLETS001Form;
