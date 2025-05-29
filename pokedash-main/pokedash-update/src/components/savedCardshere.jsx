//Nome do arquivo: SavedCards.jsx
//Data de criação: 27/05/2025, 08:15
//Autor: Welber Sued
//Matrícula <01740937>
 
//Componente responsável por exibir as cartas salvas no localStorage, 
//Capaz de reconhecer caso não haja nenhuma carta salva
//Também exibe miniatura da carta salva

//Atualização 28/05- Adicionado opção de remover cartas individualmente. Feito integração com CSS para exibir um X no canto da carta


import React, { useState, useEffect } from 'react';
import './SavedCardshere.css'; 

function SavedCards() {
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('savedCards')) || [];
    setSavedCards(stored);
  }, []);

  const removeCard = (id) => {
    const updated = savedCards.filter(card => card.id !== id);
    setSavedCards(updated);
    localStorage.setItem('savedCards', JSON.stringify(updated));
  };

  const clearAll = () => {
    setSavedCards([]);
    localStorage.removeItem('savedCards');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Cartas Salvas</h2>
      <button className="btn btn-danger mb-4" onClick={clearAll}>Remover Todas</button>
      <div className="row">
        {savedCards.map(card => (
          <div key={card.id} className="col-md-3 mb-4 fade-out">
            <div className="card h-100 position-relative">
              <button 
                className="btn btn-sm btn-danger position-absolute top-0 end-0"
                onClick={() => removeCard(card.id)}
              >X</button>
              <img src={card.images.small} className="card-img-top" alt={card.name} />
              <div className="card-body">
                <h5 className="card-title">{card.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedCards;
