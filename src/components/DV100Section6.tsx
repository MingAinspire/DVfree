import React, { useState } from 'react';

const DV100Section6: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <div>
      <h2>Workplace, School, Residence, and Animals</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Do you and the person you are seeking protection from have the same workplace or go to the same school?</label>
          <div className="flex">
            <input type="radio" name="sameWorkplaceSchool" value="yes" onChange={handleInputChange} checked={formData.sameWorkplaceSchool === 'yes'} />
            <label className="ml-2">Yes</label>
          </div>
          <div className="flex">
            <input type="radio" name="sameWorkplaceSchool" value="no" onChange={handleInputChange} checked={formData.sameWorkplaceSchool === 'no'} />
            <label className="ml-2">No</label>
          </div>
        </div>
        {formData.sameWorkplaceSchool === 'yes' &amp;&amp; (
          <div>
            <label className="block text-sm font-medium mb-1">Please provide details:</label>
            <textarea name="sameWorkplaceSchoolDetails" onChange={handleInputChange} value={formData.sameWorkplaceSchoolDetails || ''} />
          </div>
        )}
        <div>
          <label className="block text-sm font-medium mb-1">Please provide information about your residence and your right to live there:</label>
          <textarea name="residenceInfo" onChange={handleInputChange} value={formData.residenceInfo || ''} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Do you want the restraining order to protect your animals?</label>
          <div className="flex">
            <input type="radio" name="protectAnimals" value="yes" onChange={handleInputChange} checked={formData.protectAnimals === 'yes'} />
            <label className="ml-2">Yes</label>
          </div>
          <div className="flex">
            <input type="radio" name="protectAnimals" value="no" onChange={handleInputChange} checked={formData.protectAnimals === 'no'} />
            <label className="ml-2">No</label>
          </div>
        </div>
        {formData.protectAnimals === 'yes' &amp;&amp; (
          <div>
            <label className="block text-sm font-medium mb-1">Please provide information about the animals that need protection:</label>
            <textarea name="animalsInfo" onChange={handleInputChange} value={formData.animalsInfo || ''} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DV100Section6;
