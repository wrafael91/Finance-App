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
            {transaction.description} - ${transaction.amount} ({transaction.type})
          </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TransactionList;