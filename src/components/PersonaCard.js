import React from 'react';

function PersonaCard({ persona, isSelected, isPrimary, onSelect, onPrimarySelect }) {
  return (
    <div className={`persona-card ${isSelected ? 'selected' : ''} ${isPrimary ? 'primary' : ''}`}>
      <h3>{persona.name}</h3>
      <p>{persona.description}</p>
      <button onClick={() => onSelect(persona.id)}>
        {isSelected ? 'Deselect' : 'Select'}
      </button>
      {isSelected && (
        <button onClick={() => onPrimarySelect(persona.id)} className="primary-button">
          {isPrimary ? 'Remove Primary' : 'Set as Primary'}
        </button>
      )}
    </div>
  );
}

export default PersonaCard;
