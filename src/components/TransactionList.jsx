function TransactionList({transactions=[], filter, onDeleteTransaction}) {

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
          filteredTransactions.map((transaction) =>( 
          <li key={transaction.id} className="transaction-item">
            <span className="transaction-description">{transaction.description}</span>
            <span className="transaction-amount">${transaction.amount}</span>
            <span className={`transaction-type ${transaction.type}`}>
              {transaction.type === 'income' ? 'Ingreso' : 'Gasto'}
            </span>
            <button
              className="delete-button"
              onClick={() => onDeleteTransaction(transaction.id)}
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