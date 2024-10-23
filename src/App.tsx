import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FormProcess from './components/FormProcess';
import PreparationSteps from './components/PreparationSteps';
import CourtInfo from './components/CourtInfo';
import { Shield } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex items-center">
            <Shield className="mr-2" />
            <h1 className="text-2xl font-bold">California DVTRO Assistance</h1>
          </div>
        </header>
        <main className="container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/form" element={<FormProcess />} />
            <Route path="/preparation" element={<PreparationSteps />} />
            <Route path="/court-info" element={<CourtInfo />} />
          </Routes>
        </main>
        <footer className="bg-gray-200 text-center p-4 mt-8">
          <p>&copy; 2024 California DVTRO Assistance. This is not a legal service.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;