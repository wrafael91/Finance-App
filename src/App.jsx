import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const [filter, setFilter] = useState('all');

  const addTransaction = (newTransaction) => {
    const transaction = {
      ...newTransaction,
      id: Date.now()
    };
    setTransactions([...transactions, transaction]);
    console.log('Transacciones actuales:', [...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions)
  }

  console.log('Filtro actual en App:', filter);
  return (
    <div className='container'>
      <h1>Mi App de Finanzas</h1>
      <Dashboard transactions={transactions} />
      <TransactionForm onAddTransaction={addTransaction} />
      <div className="filter-container">
        <label>Filtrar por:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todos</option>
            <option value="income">Ingresos</option>
            <option value="expense">Gastos</option>
          </select>
      </div>
      <TransactionList 
        transactions={transactions} 
        filter={filter}
        onDeleteTransaction={deleteTransaction}
        />
    </div>
  );
}

export default App;