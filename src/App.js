import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

function App() {
  const [selectedPersonas, setSelectedPersonas] = useState([]);
  const [primaryPersona, setPrimaryPersona] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage setSelectedPersonas={setSelectedPersonas} setPrimaryPersona={setPrimaryPersona} />} />
          <Route path="/dashboard" element={<Dashboard selectedPersonas={selectedPersonas} primaryPersona={primaryPersona} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
