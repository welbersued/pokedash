//Nome do arquivo: SavedCards.jsx
//Data de criação: 27/05/2025, 08:15
//Autor: Welber Sued
//Matrícula <01740937>
 
//Componente responsável por exibir as cartas salvas no localStorage, 
//Capaz de reconhecer caso não haja nenhuma carta salva
//Também exibe miniatura da carta salva


import React, { useEffect, useState } from 'react';

function SavedCards() {
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('savedCards')) || [];
    setSavedCards(cards);
  }, []);

  return (
    <div>
      <h2>Cartas Salvas</h2>

      {savedCards.length === 0 ? (
        <p>Nenhuma carta salva.</p>
      ) : (
        <div>
          {savedCards.map((card) => (
            <img
              key={card.id}
              src={card.images.small}
              alt={card.name}
              style={{ width: '100px', margin: '5px' }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedCards;
