import React, { useState } from 'react';

const DV100Section2: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>DV-100 Section 2</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-2">
            What is your age?
          </label>
          <input
            type="number"
            name="age"
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Your age"
            onChange={handleInputChange}
            value={formData.age || ''}
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">
            What is your current address?
          </label>
          <input
            type="text"
            name="address"
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Your address"
            onChange={handleInputChange}
            value={formData.address || ''}
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">
            What is your relationship with the restrained person?
          </label>
          <input
            type="text"
            name="relationship"
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Your relationship"
            onChange={handleInputChange}
            value={formData.relationship || ''}
          />
        </div>
      </div>
    </div>
  );
};

export default DV100Section2;
