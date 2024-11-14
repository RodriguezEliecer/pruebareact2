// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebard';
import DashboardPage from './pages/DashboardPage';
import TablePage from './pages/TablePage';
import ReportsPage from './pages/ReportsPage';
import './App.css';  // Importa los estilos globales

function App() {
  return (
    <Router>
      <div className="main-container">
        <Sidebar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
