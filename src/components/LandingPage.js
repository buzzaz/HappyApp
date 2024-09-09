import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonaCard from './PersonaCard';
import personas from '../data/personas';

function LandingPage({ setSelectedPersonas, setPrimaryPersona }) {
  const [selected, setSelected] = useState([]);
  const [primary, setPrimary] = useState(null);
  const navigate = useNavigate();

  const handlePersonaSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((personaId) => personaId !== id));
      if (primary === id) {
        setPrimary(null);
      }
    } else {
      setSelected([...selected, id]);
    }
  };

  const handlePrimarySelect = (id) => {
    setPrimary(id);
  };

  const handleSubmit = () => {
    setSelectedPersonas(selected);
    setPrimaryPersona(primary);
    navigate('/dashboard');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the Happiness App</h1>
      <p>Select one or more personas that resonate with you:</p>
      <div className="persona-grid">
        {personas.map((persona) => (
          <PersonaCard
            key={persona.id}
            persona={persona}
            isSelected={selected.includes(persona.id)}
            isPrimary={primary === persona.id}
            onSelect={handlePersonaSelect}
            onPrimarySelect={handlePrimarySelect}
          />
        ))}
      </div>
      <button onClick={handleSubmit} disabled={selected.length === 0}>
        Continue to Dashboard
      </button>
    </div>
  );
}

export default LandingPage;
