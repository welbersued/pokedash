// Nome do arquivo: App.jsx
//Data da primeira atualização: 26/05/2025
//Autor: Welber Sued
//Matrícula <01740937>
//Atualização 27/05/2025 Centralizada a exibição do dashboard de cartas Pokémon e
//Renderiza as cartas salvas, as cartas estáticas e o componente de pesquisa

import React from 'react';
import CardSearch from './components/CardSearch';  
import CardStatic from './components/CardStatic';
import SavedCards from './components/savedCardshere';

function App() {
  return (
    <div>
      <h1>Pokedash - Welber Sued</h1>
      <SavedCards />
      <CardStatic />
      <CardSearch />  
    </div>
  );
}

export default App;
