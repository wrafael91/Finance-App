import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTransaction = (newTransaction) => {
    const transaction = {
      ...newTransaction,
      id: Date.now()
    };
    setTransactions([...transactions, transaction]);
    console.log('Transacciones actuales:', [...transactions, transaction]);
  };

  console.log('Filtro actual en App:', filter);
  return (
    <div className='container'>
      <h1>Mi App de Finanzas</h1>
      <Dashboard transactions={transactions} />
      <TransactionForm onAddTransaction={addTransaction} />
        <label>Filtrar por:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todos</option>
            <option value="income">Ingresos</option>
            <option value="expense">Gastos</option>
          </select>
      <TransactionList transactions={transactions} filter={filter}/>
    </div>
  );
}

export default App;