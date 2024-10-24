import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FormData {
  applicantAge: string;
  applicantAddress: string;
  relationship: string;
  restrainedPersonName: string;
  restrainedPersonAge: string;
  restrainedPersonAddress: string;
  livesTogether: boolean;
}

const DV109Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    applicantAge: '',
    applicantAddress: '',
    relationship: '',
    restrainedPersonName: '',
    restrainedPersonAge: '',
    restrainedPersonAddress: '',
    livesTogether: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const name = target.name;
    let value;

    if (target instanceof HTMLInputElement) {
      value = target.type === 'checkbox' ? target.checked : target.value;
    } else if (target instanceof HTMLTextAreaElement) {
      value = target.value;
    } else if (target instanceof HTMLSelectElement) {
      value = target.value;
    } else {
      throw new Error('Unexpected target type');
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g., API call, data storage)
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="applicantAge">Applicant's Age:</label>
          <input
            type="number"
            id="applicantAge"
            name="applicantAge"
            value={formData.applicantAge}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="applicantAddress">Applicant's Address:</label>
          <textarea
            id="applicantAddress"
            name="applicantAddress"
            value={formData.applicantAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="relationship">Relationship to Restrained Person:</label>
          <input
            type="text"
            id="relationship"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="restrainedPersonName">Restrained Person's Name:</label>
          <input
            type="text"
            id="restrainedPersonName"
            name="restrainedPersonName"
            value={formData.restrainedPersonName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="restrainedPersonAge">Restrained Person's Age:</label>
          <input
            type="number"
            id="restrainedPersonAge"
            name="restrainedPersonAge"
            value={formData.restrainedPersonAge}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="restrainedPersonAddress">Restrained Person's Address:</label>
          <textarea
            id="restrainedPersonAddress"
            name="restrainedPersonAddress"
            value={formData.restrainedPersonAddress}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="livesTogether">Lives Together:</label>
          <input
            type="checkbox"
            id="livesTogether"
            name="livesTogether"
            checked={formData.livesTogether}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <Link to="/form" className="px-4 py-2 bg-gray-200 rounded">Back</Link>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
        </div>
      </form>
    </div>
  );
};

export default DV109Form;
