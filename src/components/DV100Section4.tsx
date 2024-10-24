import React, { useState } from 'react';

const DV100Section4: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <div>
      <h2>Describe Abuse</h2>
      <p className="text-sm text-gray-600 mb-4">
        Please describe how the person you are seeking protection from has been abusive.  The judge will use this information to decide your request.  Please provide details about any incident you believe was abusive.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Most recent abuse:</label>
          <div className="space-y-2">
            <label className="block text-xs font-medium mb-1">Date of abuse (give an estimate if you don't know the exact date):</label>
            <input type="date" name="mostRecentAbuseDate" onChange={handleInputChange} value={formData.mostRecentAbuseDate || ''} />
            <label className="block text-xs font-medium mb-1">Did anyone else hear or see what happened on this day?</label>
            <div className="flex">
              <input type="radio" name="witnessToAbuse" value="yes" onChange={handleInputChange} checked={formData.witnessToAbuse === 'yes'} />
              <label className="ml-2">Yes (If yes, give names):</label>
              <input type="text" name="witnessNames" onChange={handleInputChange} value={formData.witnessNames || ''} />
            </div>
            <div className="flex">
              <input type="radio" name="witnessToAbuse" value="no" onChange={handleInputChange} checked={formData.witnessToAbuse === 'no'} />
              <label className="ml-2">No</label>
            </div>
            <div className="flex">
              <input type="radio" name="witnessToAbuse" value="idk" onChange={handleInputChange} checked={formData.witnessToAbuse === 'idk'} />
              <label className="ml-2">I don't know</label>
            </div>
            <label className="block text-xs font-medium mb-1">Give more details about how the person was abusive on this day:</label>
            <textarea name="mostRecentAbuseDetails" onChange={handleInputChange} value={formData.mostRecentAbuseDetails || ''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DV100Section4;
