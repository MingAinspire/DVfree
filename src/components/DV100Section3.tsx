import React, { useState } from 'react';

const DV100Section3: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <div>
      <h2>DV-100 Section 3</h2>
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Person Asking for Protection</h3>
        <div>
          <label className="block text-sm font-medium mb-1">Your name:</label>
          <input
            type="text"
            name="protectedPersonName"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Your full legal name"
            onChange={handleInputChange}
            value={formData.protectedPersonName || ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Your age:</label>
          <input
            type="number"
            name="protectedPersonAge"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Your age"
            onChange={handleInputChange}
            value={formData.protectedPersonAge || ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address where you can receive court papers:</label>
          <textarea
            name="protectedPersonAddress"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Your address"
            onChange={handleTextAreaChange}
            value={formData.protectedPersonAddress || ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Telephone:</label>
          <input
            type="tel"
            name="protectedPersonTelephone"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Your telephone number"
            onChange={handleInputChange}
            value={formData.protectedPersonTelephone || ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Fax:</label>
          <input
            type="tel"
            name="protectedPersonFax"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Your fax number"
            onChange={handleInputChange}
            value={formData.protectedPersonFax || ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address:</label>
          <input
            type="email"
            name="protectedPersonEmail"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Your email address"
            onChange={handleInputChange}
            value={formData.protectedPersonEmail || ''}
          />
        </div>
        <h4 className="text-base font-medium">Your lawyer's information (if you have one)</h4>
        <div>
          <label className="block text-sm font-medium mb-1">Name:</label>
          <input
            type="text"
            name="lawyerName"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Your lawyer's name"
            onChange={handleInputChange}
            value={formData.lawyerName || ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">State Bar No.:</label>
          <input
            type="text"
            name="lawyerBarNumber"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Your lawyer's state bar number"
            onChange={handleInputChange}
            value={formData.lawyerBarNumber || ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Firm Name:</label>
          <input
            type="text"
            name="lawyerFirmName"
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Your lawyer's firm name"
            onChange={handleInputChange}
            value={formData.lawyerFirmName || ''}
          />
        </div>

        <h3 className="text-lg font-medium">Person You Want Protection From</h3>
        <div>
          <label className="block text-sm font-medium mb-1">Gender:</label>
          <select
            name="restrainedPersonGender"
            className="w-full border rounded-lg px-3 py-2"
            onChange={handleInputChange}
            value={formData.restrainedPersonGender || ''}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <h3 className="text-lg font-medium">Your Relationship to the Person</h3>
        <div className="space-y-2">
          <div>
            <input
              type="checkbox"
              name="haveChildren"
              className="mr-2"
              onChange={handleCheckboxChange}
              checked={formData.haveChildren || false}
            />
            <label className="text-sm font-medium">We have a child or children together (names of children):</label>
            {formData.haveChildren &amp;&amp; (
              <input
                type="text"
                name="childrenNames"
                className="w-full border rounded-lg px-3 py-2 mt-1"
                placeholder="Enter children's names"
                onChange={handleInputChange}
                value={formData.childrenNames || ''}
              />
            )}
          </div>
          <div>
            <input
              type="checkbox"
              name="areMarried"
              className="mr-2"
              onChange={handleCheckboxChange}
              checked={formData.areMarried || false}
            />
            <label className="text-sm font-medium">We are married or registered domestic partners.</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="wereMarried"
              className="mr-2"
              onChange={handleCheckboxChange}
              checked={formData.wereMarried || false}
            />
            <label className="text-sm font-medium">We used to be married or registered domestic partners.</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="areDating"
              className="mr-2"
              onChange={handleCheckboxChange}
              checked={formData.areDating || false}
            />
            <label className="text-sm font-medium">We are dating or used to date.</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="wereEngaged"
              className="mr-2"
              onChange={handleCheckboxChange}
              checked={formData.wereEngaged || false}
            />
            <label className="text-sm font-medium">We are or used to be engaged to be married.</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="areRelated"
              className="mr-2"
              onChange={handleCheckboxChange}
              checked={formData.areRelated || false}
            />
            <label className="text-sm font-medium">We are related.</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="livedTogether"
              className="mr-2"
              onChange={handleCheckboxChange}
              checked={formData.livedTogether || false}
            />
            <label className="text-sm font-medium">We live together or used to live together.</label>
          </div>
        </div>

        <h3 className="text-lg font-medium">Other Restraining Orders and Court Cases</h3>
        <div>
          <label className="block text-sm font-medium mb-1">Are there any restraining orders currently in place or that have expired in the last six months?</label>
          <div>
            <input
              type="radio"
              name="hasRestrainingOrders"
              id="noRestrainingOrders"
              value="no"
              className="mr-2"
              onChange={handleInputChange}
              checked={formData.hasRestrainingOrders === 'no'}
            />
            <label htmlFor="noRestrainingOrders" className="text-sm font-medium">No</label>
          </div>
          <div>
            <input
              type="radio"
              name="hasRestrainingOrders"
              id="yesRestrainingOrders"
              value="yes"
              className="mr-2"
              onChange={handleInputChange}
              checked={formData.hasRestrainingOrders === 'yes'}
            />
            <label htmlFor="yesRestrainingOrders" className="text-sm font-medium">Yes</label>
          </div>
        </div>
        {formData.hasRestrainingOrders === 'yes' &amp;&amp; (
          <div>
            <label className="block text-sm font-medium mb-1">Give information below and attach a copy if you have one.</label>
            <textarea
              name="restrainingOrdersInfo"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Enter information about restraining orders"
              onChange={handleTextAreaChange}
              value={formData.restrainingOrdersInfo || ''}
            />
          </div>
        )}
        <div>
          <label className="block text-sm font-medium mb-1">Are you involved in any other court case with the person?</label>
          <div>
            <input
              type="radio"
              name="hasOtherCourtCases"
              id="noOtherCourtCases"
              value="no"
              className="mr-2"
              onChange={handleInputChange}
              checked={formData.hasOtherCourtCases === 'no'}
            />
            <label htmlFor="noOtherCourtCases" className="text-sm font-medium">No</label>
          </div>
          <div>
            <input
              type="radio"
              name="hasOtherCourtCases"
              id="yesOtherCourtCases"
              value="yes"
              className="mr-2"
              onChange={handleInputChange}
              checked={formData.hasOtherCourtCases === 'yes'}
            />
            <label htmlFor="yesOtherCourtCases" className="text-sm font-medium">Yes</label>
          </div>
        </div>
        {formData.hasOtherCourtCases === 'yes' &amp;&amp; (
          <div>
            <label className="block text-sm font-medium mb-1">If you know, list where the case was filed (city, state, or tribe), the year it was filed, and case number.</label>
            <textarea
              name="otherCourtCasesInfo"
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Enter information about other court cases"
              onChange={handleTextAreaChange}
              value={formData.otherCourtCasesInfo || ''}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DV100Section3;
