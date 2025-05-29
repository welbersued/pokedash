// Data: 26/05/2025
// Nome: Welber Sued
// Matrícula: <01740937>
// Descrição: Através da criação do arquivo CardSearch.jsx, será possível buscar cartas via código. 
// Confesso que foi meio complicado a questão da requisição da API
// tentei instalar pelo PowerShell, mas não deu certo
// comando fetch usado para puxar pela API pelo link
// Atualizando a informação, a instalação do SDK não deu certo, por isso o fetch

// Atualização 28/05 - Estilização e exibição de informações detalhadas das cartas em português

// Atualização 29/05 - Corrigido problema de duplicação com SavedCards e ajustado layout
// Adicionado busca automática ao digitar com useEffect
// Data: 26/05/2025
// Nome: Welber Sued
// Matrícula: <01740937>
// Descrição: Através da criação do arquivo CardSearch.jsx, será possível buscar cartas via código. 
// mensagem de erro caso não encontre Pokémon

import React, { useState, useEffect } from 'react';
import PokeAnim from './PokeAnim';
import './CardSearch.css';

function CardSearch() {
  const [query, setQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      buscarCartas();
    } else {
      setCards([]);
      setError(null);
    }
  }, [query]);

  const buscarCartas = () => {
    setLoading(true);
    fetch(`https://api.pokemontcg.io/v2/cards?q=name:*${query}*`)
      .then(res => res.json())
      .then(data => {
        if (data.data.length === 0) {
          setError('Não achei esse Pokémon. Tem certeza que esse é o nome correto?');
          setCards([]);
        } else {
          setCards(data.data);
          setError(null);
        }
      })
      .catch(() => {
        setError('Erro ao buscar cartas');
        setCards([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearch = () => {
    if (query.length > 2) {
      buscarCartas();
    }
  };

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
    <div className="container my-5">
      <h2 className="text-center mb-4">Buscar Cartas Pokémon</h2>

      <div className="input-group mb-3 justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Ex: Pikachu, Charizard..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      {loading && <div className="text-center mb-3">🔄 Carregando...</div>}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      <div className="row">
        {cards.length === 0 && !loading && !error ? (
          <PokeAnim />
        ) : (
          cards.map((card) => {
            const precoMedio = card.tcgplayer?.prices?.holofoil?.market;

            return (
              <div className="col-md-3 mb-4 fade-in" key={card.id}>
                <div className="card h-100 shadow-sm">
                  <img src={card.images?.large || card.images?.small} className="card-img-top" alt={card.name} />
                  <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <p><strong>Tipo principal:</strong> {card.supertype || 'Não informado'}</p>
                    <p><strong>Subtipos:</strong> {card.subtypes?.join(', ') || 'Não informado'}</p>
                    <p><strong>Pontos de Vida (HP):</strong> {card.hp || 'Não informado'}</p>
                    <p><strong>Tipos:</strong> {card.types?.join(', ') || 'Não informado'}</p>

                    {card.evolvesTo && card.evolvesTo.length > 0 && (
                      <p><strong>Evolui para:</strong> {card.evolvesTo.join(', ')}</p>
                    )}

                    {card.rules && card.rules.length > 0 && (
                      <>
                        <strong>Regras Especiais:</strong>
                        <ul>
                          {card.rules.map((rule, idx) => <li key={idx}>{rule}</li>)}
                        </ul>
                      </>
                    )}

                    {card.attacks && card.attacks.length > 0 && (
                      <>
                        <strong>Ataques:</strong>
                        <ul>
                          {card.attacks.map((attack, idx) => (
                            <li key={idx}>
                              <strong>Custo:</strong> {attack.cost?.join(', ') || 'Não informado'} | 
                              <strong> Dano:</strong> {attack.damage || 'Não informado'} | 
                              <strong> Efeito:</strong> {attack.text || 'Não informado'}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    <p><strong>Fraquezas:</strong> {card.weaknesses?.map(w => `${w.type} (${w.value})`).join(', ') || 'Nenhuma'}</p>
                    <p><strong>Custo de Recuo:</strong> {card.retreatCost?.join(', ') || 'Nenhum'}</p>

                    {card.set && (
                      <>
                        <p><strong>Conjunto:</strong> {card.set.name || 'Não informado'}</p>
                        <p><strong>Data de Lançamento:</strong> {card.set.releaseDate || 'Não informado'}</p>
                      </>
                    )}

                    <p><strong>Número da Carta:</strong> {card.number || 'Não informado'}</p>
                    <p><strong>Raridade:</strong> {card.rarity || 'Não informado'}</p>
                    <p><strong>Artista:</strong> {card.artist || 'Não informado'}</p>

                    <p>
                      <strong>Preço Médio (Holofoil):</strong> 
                      {typeof precoMedio === 'number' ? ` R$${precoMedio.toFixed(2)}` : ' Não disponível'}
                    </p>

                    <button
                      className="btn btn-success btn-sm mt-2"
                      onClick={() => saveCard(card)}
                    >
                      Salvar Carta
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default CardSearch;
