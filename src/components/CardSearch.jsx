// Data: 26/05/2025, 07:00
// Nome: Welber Sued
// Matrícula: <01740937>
// Descrição: Através da criação do arquivo CardSearch.jsx, será possível buscar cartas via código. 
// Confesso que foi meio complicado a questão da requisição da API
// tentei instalar pelo PowerShell, mas não deu certo
//comando fetch usado para puxar pela API pelo link
//Atualizando a informação, a instalação do SDK não foi deu certo, por isso o fetch

import React, { useState } from 'react';

function CardSearch() {
  const [query, setQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!query) return;

    fetch(`https://api.pokemontcg.io/v2/cards?q=name:${query}`)
      .then(res => res.json())
      .then(data => {
        setCards(data.data);
        setError(null);
      })
      .catch(() => {
        setError('Erro ao buscar cartas');
        setCards([]);
      });
  };

  // ✅ Função para salvar carta no localStorage
  const saveCard = (card) => {
    const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
    const alreadySaved = savedCards.some(saved => saved.id === card.id);

    if (alreadySaved) {
      alert('Carta já salva!');
      return;
    }

    savedCards.push(card);
    localStorage.setItem('savedCards', JSON.stringify(savedCards));
    alert('Carta salva com sucesso!');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o nome da carta"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Buscar</button>

      {error && <p>{error}</p>}

      <div>
        {cards.length === 0 && <p>Nenhuma carta encontrada</p>}

        {cards.map((card) => (
          <div key={card.id}>
            <img src={card.images.small} alt={card.name} />
            <p>{card.name}</p>

            {/* ✅ Botão de salvar aqui */}
            <button onClick={() => saveCard(card)}>Salvar Carta</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSearch;
