// Nome do arquivo: Main.jsx
//Data da primeira atualização: 26/05/2025
//Autor: Welber Sued
//Matrícula <01740937>
//Atualização 27/05/2025: Inserido o import bootstrap para iniciar a estilização e organização visual do projeto

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
