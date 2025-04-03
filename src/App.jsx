import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    const transaction = {
      ...newTransaction,
      id: Date.now()
    };
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className='container'>
      <h1>Mi App de Finanzas</h1>
      <Dashboard transactions={transactions} />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;