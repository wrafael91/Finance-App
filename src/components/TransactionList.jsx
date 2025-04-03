function TransactionList({transactions=[]}) {
  return (
    <div>
      <h3>Lista de Transacciones</h3>
      <ul>
        {(!transactions||transactions.length === 0) ? (
          <li>No hay transacciones aun</li>
        ) : (
          transactions.map((transaction) =>( 
          <li key={transaction.id}>
            <span>{transaction.description}</span>
            <span>${transaction.amount}</span>
            <span>({transaction.type})</span>
          </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TransactionList;