// Data da atualização: 28/05/2025
// Nome: Welber Sued, CardStatic.jsx
// Matrícula: <01740937>
// Descrição: Atualização da parte de exibição das cartas salvas usando estilização via Bootstrap e detalhes em modal
// Ainda tá feio mas vai dar certo :)

import React, { useEffect, useState } from 'react';

function CardStatic() {
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('savedCards')) || [];
    setSavedCards(cards);
  }, []);

  const clearSavedCards = () => {
    localStorage.removeItem('savedCards');
    setSavedCards([]);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-3">Cartas Salvas</h2>

      {savedCards.length === 0 ? (
        <div className="alert alert-warning">Nenhuma carta salva.</div>
      ) : (
        <>
          <div className="row">
            {savedCards.map((card) => (
              <div className="col-md-3 mb-4" key={card.id}>
                <div className="card h-100">
                  <img src={card.images.small} className="card-img-top" alt={card.name} />
                  <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="btn btn-danger mt-3" onClick={clearSavedCards}>
            Limpar todas as cartas
          </button>
        </>
      )}
    </div>
  );
}

export default CardStatic;