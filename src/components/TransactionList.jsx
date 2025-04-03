function TransactionList({transactions=[]}) {
  return (
    <div>
      <h3>Lista de Transacciones</h3>
      <ul>
        {(!transactions||transactions.length === 0) ? (
          <li className="no-transactions">No hay transacciones aun</li>
        ) : (
          transactions.map((transaction) =>( 
          <li key={transaction.id} className="transaction-item">
            <span className="transaction-description">{transaction.description}</span>
            <span className="transaction-amount">${transaction.amount}</span>
            <span className={`transaction-type ${transaction.type}`}>{transaction.type === 'income' ? 'Ingreso' : 'Gasto'}</span>
          </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TransactionList;