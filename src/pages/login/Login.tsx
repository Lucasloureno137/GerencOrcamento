import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    console.log('Login com:', email, password);
    
    if (email && password) {
      navigate('/dashboard');
    } else {
      alert('Por favor, insira email e senha.');
    }
  };

  return (
    <div className={styles['login-container']}>
      <h1 className={styles['login-title']}>Login</h1>
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles['login-input']}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles['login-input']}
      />
      <button onClick={handleLogin} className={styles['login-button']}>
        Entrar
      </button>
    </div>
  );
};

export default Login;


