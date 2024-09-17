// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import './Dashboard.css';

interface Entry {
  id: number;
  type: 'income' | 'expense';
  description: string;
  amount: number;
}

const Dashboard: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number | string>('');
  const [type, setType] = useState<'income' | 'expense'>('income');

  const handleAddEntry = () => {
    if (!description || !amount) return;

    const newEntry: Entry = {
      id: Date.now(),
      type,
      description,
      amount: parseFloat(amount.toString())
    };

    setEntries([...entries, newEntry]);
    setDescription('');
    setAmount('');
  };

  const handleDeleteEntry = (id: number) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const totalIncome = entries
    .filter(entry => entry.type === 'income')
    .reduce((acc, entry) => acc + entry.amount, 0);

  const totalExpenses = entries
    .filter(entry => entry.type === 'expense')
    .reduce((acc, entry) => acc + entry.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="dashboard-container">
    <h1>Dashboard</h1>
  
    <div className="entry-form">
      <div className="fields-row">
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
        <option value="income">Receita</option>
        <option value="expense">Despesa</option>
      </select>
      <button onClick={handleAddEntry}>Adicionar</button>
    </div>
  
    <div className="summary">
      <p><strong>Total de Receitas:</strong> R$ {totalIncome.toFixed(2)}</p>
      <p><strong>Total de Despesas:</strong> R$ {totalExpenses.toFixed(2)}</p>
      <p><strong>Saldo Restante:</strong> R$ {balance.toFixed(2)}</p>
    </div>
  
    <div className="entry-list">
      <h2>Entradas</h2>
      {entries.length === 0 ? (
        <p>Nenhuma entrada registrada.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <span>{entry.description} - R$ {entry.amount.toFixed(2)} ({entry.type === 'income' ? 'Receita' : 'Despesa'})</span>
              <button onClick={() => handleDeleteEntry(entry.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
  
  );
};

export default Dashboard;


