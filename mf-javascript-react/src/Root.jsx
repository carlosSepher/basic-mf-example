import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Panel from './components/panel';
import Busqueda from './components/busqueda';
import Clientes from './components/clientes';

import {square} from 'app-mf-javascript';

import './style.css';

export default function Root(props) {

  console.log('Respuesta desde app-mf-javascript', square(2));

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
