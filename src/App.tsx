import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header>
          <h2>Gerenciador de Orçamento Pessoal</h2>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; Eng. Soft FAG. Lucas dos Santos Lourenço. Turma A.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;


