import React, {useState} from 'react';
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    const transaction = {
      ...newTransaction,
      id: Date.now() // usar la fecha actual como id único
    };
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <h1>App de finanzas</h1>
      <Dashboard />
      <TransactionForm onAddTransaction={addTransaction}/>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;