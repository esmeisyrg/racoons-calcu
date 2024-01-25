import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalcuMain from './pages/CalcuMain/CalcuMain';
import PreView from './pages/PreView/PreView';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas sin autenticación */}
        <Route path="/" element={<PreView />} />
        <Route path="/calculator" element={<CalcuMain />} />
      </Routes>
    </Router>
  );
}

export default App;
