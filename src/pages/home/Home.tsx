import React from 'react';
import './Home.css'; 

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
      
      <p>Esta aplicação  foi projetada para  gerenciar suas finanças pessoais de forma simples e eficiente.</p>
      <p> Com uma interface intuitiva, permite que você acompanhe suas receitas e despesas mensais com facilidade, oferecendo uma visão clara e organizada das suas finanças.</p>
    </div>
  );
};

export default Home;
