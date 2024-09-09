import React from 'react';
import personas from '../data/personas';

function Dashboard({ selectedPersonas, primaryPersona }) {
  const selectedPersonaData = personas.filter((persona) => selectedPersonas.includes(persona.id));
  const primaryPersonaData = personas.find((persona) => persona.id === primaryPersona);

  return (
    <div className="dashboard">
      <h1>Your Happiness Dashboard</h1>
      {primaryPersonaData && (
        <div className="primary-persona">
          <h2>Primary Persona: {primaryPersonaData.name}</h2>
          <p>{primaryPersonaData.description}</p>
          <h3>Goals:</h3>
          <ul>
            {primaryPersonaData.goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
      )}
      <h2>Your Selected Personas</h2>
      <div className="selected-personas">
        {selectedPersonaData.map((persona) => (
          <div key={persona.id} className="persona-card">
            <h3>{persona.name}</h3>
            <p>{persona.description}</p>
            <h4>Needs:</h4>
            <ul>
              {persona.needs.map((need, index) => (
                <li key={index}>{need}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Add more dashboard components here */}
    </div>
  );
}

export default Dashboard;
