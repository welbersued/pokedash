// Data: 28/05/2025
// Nome: Welber Sued
// Matrícula: <01740937>
// Descrição: Criada barra de navegação para alternar entre páginas
// O objetivo era criar uma outra página para visualização das cartas salvas
// Necessário instalar React Router pelo Powershell antes de funcionar

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Pokedash</Link>
        <div>
          <Link className="btn btn-light me-2" to="/">Buscar Cartas</Link>
          <Link className="btn btn-light" to="/salvas">Cartas Salvas</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
