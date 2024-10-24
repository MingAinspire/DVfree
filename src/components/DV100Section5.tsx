import React, { useState } from 'react';

const DV100Section5: React.FC = () => {
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
      <h2>Other Protected People and Firearms</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Do you want the restraining order to protect your children, family, or someone you live with?</label>
          <div className="flex">
            <input type="radio" name="protectOthers" value="yes" onChange={handleInputChange} checked={formData.protectOthers === 'yes'} />
            <label className="ml-2">Yes</label>
          </div>
          <div className="flex">
            <input type="radio" name="protectOthers" value="no" onChange={handleInputChange} checked={formData.protectOthers === 'no'} />
            <label className="ml-2">No</label>
          </div>
        </div>
        {formData.protectOthers === 'yes' &amp;&amp; (
          <div>
            <label className="block text-sm font-medium mb-1">Please provide information about the people who need protection and why:</label>
            <textarea name="otherProtectedPeople" onChange={handleInputChange} value={formData.otherProtectedPeople || ''} />
          </div>
        )}
        <div>
          <label className="block text-sm font-medium mb-1">Does the person you are seeking protection from have firearms (guns), firearm parts, or ammunition?</label>
          <div className="flex">
            <input type="radio" name="hasFirearms" value="yes" onChange={handleInputChange} checked={formData.hasFirearms === 'yes'} />
            <label className="ml-2">Yes</label>
          </div>
          <div className="flex">
            <input type="radio" name="hasFirearms" value="no" onChange={handleInputChange} checked={formData.hasFirearms === 'no'} />
            <label className="ml-2">No</label>
          </div>
          <div className="flex">
            <input type="radio" name="hasFirearms" value="idk" onChange={handleInputChange} checked={formData.hasFirearms === 'idk'} />
            <label className="ml-2">I don't know</label>
          </div>
        </div>
        {formData.hasFirearms === 'yes' &amp;&amp; (
          <div>
            <label className="block text-sm font-medium mb-1">Please provide information about the firearms, firearm parts, or ammunition:</label>
            <textarea name="firearmsInfo" onChange={handleInputChange} value={formData.firearmsInfo || ''} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DV100Section5;
