import React from 'react';
import styles from './Sobre.module.css'; 

const Sobre: React.FC = () => {
  return (
    <div className={styles['sobre-container']}>
      <h1>Sobre</h1>
      <h2>Desenvolvido por Lucas dos Santos Lourenço.</h2>
      <img
          src="/images/fotolucs.png" 
          alt="Avatar"
          className={styles['profile-avatar']} 
        />
      <p>
        Tenho 20 anos e sou estudante de Engenharia de Software do 6° período
        na FAG - Centro Universitário Assis Gurgacz.
      </p>
      <p>
        Cascavel - PR
      </p>
    </div>
  );
};

export default Sobre;

