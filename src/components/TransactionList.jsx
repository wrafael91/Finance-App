import { useState } from "react";

function TransactionList({transactions=[], filter, onDeleteTransaction}) {
  const [removingId, setRemovingId] = useState(null);

  const handleDelete = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      onDeleteTransaction(id);
      setRemovingId(null);
    }, 500);
  };

  const filteredTransactions = filter === 'all' ?
    transactions : transactions.filter((transaction) => transaction.type === filter);

    console.log('Transacciones filtradas:', filteredTransactions); // Verifica las transacciones filtradas
    console.log('Filtro actual:', filter); // Verifica el valor del filtro

  return (
    <div>
      <h3>Lista de Transacciones</h3>
      <ul>
        {(!filteredTransactions||filteredTransactions.length === 0) ? (
          <li className="no-transactions">No hay transacciones aún</li>
        ) : (
          filteredTransactions.map((transaction, index) =>( 
          <li 
            key={transaction.id} 
            className={`transaction-item ${removingId === transaction.id ? 'removing' : ''}`}>
            <span className="transaction-number">{index + 1}.</span>
            <span className="transaction-description">{transaction.description}</span>
            <span className="transaction-amount">${transaction.amount.toLocaleString('es-ES')}</span>
            <span className={`transaction-type ${transaction.type}`}>
              {transaction.type === 'income' ? 'Ingreso' : 'Gasto'}
            </span>
            <button
              className="delete-button"
              onClick={() => handleDelete(transaction.id)}
              disabled={removingId === transaction.id}
            >
              Eliminar
            </button>
          </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TransactionList;