// Nome do arquivo: App.jsx
// Data da primeira atualização: 26/05/2025
// Autor: Welber Sued
// Matrícula <01740937>
// Atualização 27/05/2025 Centralizada a exibição do dashboard de cartas Pokémon e
// Renderiza as cartas salvas, as cartas estáticas e o componente de pesquisa
// Atualização em 28/05 - Adição do NavBar e animação da pokebola
// Atualização em 29/05 - Correção: organização das rotas para evitar duplicação e sobreposição

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CardSearch from './components/CardSearch';
import CardStatic from './components/CardStatic';
import SavedCards from './components/savedCardshere';

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<CardSearch />} />
          <Route path="/salvas" element={<SavedCards />} />
          <Route path="/static" element={<CardStatic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
