import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Clock } from 'lucide-react';

interface CountyInfoProps {
  zipCode: string;
}

// This is a mock function. In a real application, you'd use an API or database to get this information.
const getCountyInfo = (zipCode: string) => {
  // Mock data - replace with actual API call or database lookup
  const counties = {
    '90001': {
      name: 'Los Angeles County',
      onlineFilingAvailable: true,
      onlineFilingUrl: 'https://www.lacourt.org/division/familylaw/familylaw.aspx',
      walkInInfo: 'Walk-in hours: Monday to Friday, 8:30 AM to 4:30 PM',
      address: '111 N. Hill St., Los Angeles, CA 90012',
    },
    '94102': {
      name: 'San Francisco County',
      onlineFilingAvailable: false,
      walkInInfo: 'Walk-in hours: Monday to Friday, 8:30 AM to 4:00 PM',
      address: '400 McAllister St., San Francisco, CA 94102',
    },
  };

  return counties[zipCode as keyof typeof counties] || null;
};

const CountyInfo: React.FC<CountyInfoProps> = ({ zipCode }) => {
  const [countyInfo, setCountyInfo] = useState<any>(null);

  useEffect(() => {
    const info = getCountyInfo(zipCode);
    setCountyInfo(info);
  }, [zipCode]);

  if (!countyInfo) {
    return <p>Sorry, we couldn't find information for the provided ZIP code. Please check your ZIP code and try again.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{countyInfo.name} Court Information</h2>
      
      {countyInfo.onlineFilingAvailable ? (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Online Filing Available</h3>
          <p className="mb-2">Good news! You can file your DVTRO online in {countyInfo.name}.</p>
          <a href={countyInfo.onlineFilingUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
            File Online <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      ) : (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">In-Person Filing Required</h3>
          <p>Online filing is not available in {countyInfo.name}. You'll need to file in person at the courthouse.</p>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Courthouse Information</h3>
        <p className="flex items-center mb-2">
          <MapPin className="mr-2" /> {countyInfo.address}
        </p>
        <p className="flex items-center">
          <Clock className="mr-2" /> {countyInfo.walkInInfo}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Download and print your completed DVTRO forms</li>
          <li>{countyInfo.onlineFilingAvailable ? 'File your forms online using the link above' : 'Bring your forms to the courthouse during walk-in hours'}</li>
          <li>Follow the court's instructions for next steps after filing</li>
        </ol>
      </div>

      <div className="mt-8">
        <Link to="/court-info" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
          View Detailed Court Process
        </Link>
      </div>
    </div>
  );
};

export default CountyInfo;