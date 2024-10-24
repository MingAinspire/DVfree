import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FormProcess from './components/FormProcess';
import PreparationSteps from './components/PreparationSteps';
import CourtInfo from './components/CourtInfo';
import DV109Form from './components/DV109Form';
import DV100Section2 from './components/DV100Section2';
import DV100Section3 from './components/DV100Section3';
import DV100Section4 from './components/DV100Section4';
import DV100Section5 from './components/DV100Section5';
import DV100Section6 from './components/DV100Section6';
import DV100Section7 from './components/DV100Section7';
import DV100Section8 from './components/DV100Section8';
import { Shield } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex items-center">
            <Shield className="mr-2" />
            <h1 className="text-2xl font-bold">California DVTRO Assistance</h1>
          </div>
        </header>
        <main className="container mx-auto mt-8 p-4 flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/form" element={<FormProcess />} />
            <Route path="/preparation" element={<PreparationSteps />} />
            <Route path="/court-info" element={<CourtInfo />} />
            <Route path="/dv109" element={<DV109Form />} />
            <Route path="/dv100-section2" element={<DV100Section2 />} />
            <Route path="/dv100-section3" element={<DV100Section3 />} />
            <Route path="/dv100-section4" element={<DV100Section4 />} />
            <Route path="/dv100-section5" element={<DV100Section5 />} />
            <Route path="/dv100-section6" element={<DV100Section6 />} />
            <Route path="/dv100-section7" element={<DV100Section7 />} />
            <Route path="/dv100-section8" element={<DV100Section8 />} />
          </Routes>
        </main>
        <footer className="bg-gray-200 text-center py-4 mt-8 flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-500">&copy; 2024 California DVTRO Assistance. This is not a legal service.</p>
          <a 
            href="https://ai-nspired.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-gray-600 hover:underline"
          >
            ai-nspired.com
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
