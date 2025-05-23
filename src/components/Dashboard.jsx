function Dashboard({ transactions }) {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="dashboard">
      <div className="dashboard-card balance">
        <h3>Total Balance</h3>
        <p className={`balance ${balance >= 0 ? 'positive' : 'negative'}`}>
          ${balance.toLocaleString('es-ES')}
        </p>
      </div>
      <div className="dashboard-card income">
        <h3>Income</h3>
        <p className="income">${totalIncome.toLocaleString('es-ES')}</p>
      </div>
      <div className="dashboard-card expense">
        <h3>Expenses</h3>
        <p className="expense">${totalExpenses.toLocaleString('es-ES')}</p>
      </div>
    </div>
  );
}

export default Dashboard;