// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Se desejar adicionar estilos específicos

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
