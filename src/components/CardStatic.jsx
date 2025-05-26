import React from 'react';

function CardStatic() {
  const card = {
    id: 'base1-4',
    name: 'Charmander',
    images: {
      small: 'https://images.pokemontcg.io/base1/4.png',
      large: 'https://images.pokemontcg.io/base1/4_hires.png',
    },
    hp: '50',
    types: ['Fire'],
    supertype: 'Pokémon',
    subtypes: ['Basic'],
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', maxWidth: 300 }}>
      <img src={card.images.large} alt={card.name} style={{ width: '100%' }} />
      <h3>{card.name}</h3>
      <p>HP: {card.hp}</p>
      <p>Tipo: {card.types.join(', ')}</p>
      <p>Tipo Superior: {card.supertype}</p>
      <p>Subtipo: {card.subtypes.join(', ')}</p>
    </div>
  );
}

export default CardStatic;
