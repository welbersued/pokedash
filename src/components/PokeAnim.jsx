// Data da criação: 28/05/2025
// Nome: Welber Sued, pokeanim.jsx
// Matrícula: <01740937>
// Descrição: Criei esse elemento como parte de estilização. Ao entrar na página inicial, será exibida uma mensagem de boas vindas
// Em cima da mensagem, aparece uma pokebola. Com ajuda do Chatgpt, não vou mentir, eu pedi para que essa pokebola pudesse fazer uma 
// animação ao passar o mouse em cima. Não sabia como fazer, mas pelo que eu pesquisei, não é tão complicado. Foi utilizado CSS e
// funções de rotação e troca da imagem. Ao passar o mouse, a pokebola gira e troca a imagem por uma pokébola aberta
// Espero que fique legal porque eu perdi um tempo nisso :)

import React, { useState } from 'react';

function PokeAnim() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-center my-5">
      <div 
        className={`poke-animation mb-3 ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ width: '100px', height: '100px', margin: '0 auto' }}
      >
        <img 
          src={isHovered 
            ? 'https://cdn-icons-png.flaticon.com/512/188/188987.png' 
            : 'https://cdn-icons-png.flaticon.com/512/188/188918.png'} 
          alt="Pokebola" 
          className="poke-img img-fluid"
        />
      </div>
      <h5>Bem-vindo ao Pokedash!</h5>
      <p>Você pode usar a busca acima para encontrar suas cartas favoritas e salvar aquelas que você mais gostar!</p>
    </div>
  );
}

export default PokeAnim;