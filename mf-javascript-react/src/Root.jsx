import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Panel from './components/panel';
import Busqueda from './components/busqueda';
import Clientes from './components/clientes';

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/crm" element={<Panel />} />
        <Route path="/crm/busqueda" element={<Busqueda />} />
        <Route path="/crm/clientes" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}
