function Dashboard({ transactions }) {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Ingresos: ${totalIncome}</p>
      <p>Gastos: ${totalExpenses}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
}

export default Dashboard;