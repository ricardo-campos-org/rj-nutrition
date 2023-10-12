import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseLayout from './BaseLayout/BaseLayout';
import Home from './views/Home/Home';
import CadastroItens from './views/CadastroItens/CadastroItens';
import MeusDados from './views/MeusDados/MeusDados';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro-itens" element={<CadastroItens />} />
          <Route path="/meus-dados" element={<MeusDados />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
