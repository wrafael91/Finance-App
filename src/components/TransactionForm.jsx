import { useState } from "react";

function TransactionForm({onAddTransaction}) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      alert('Please complete all fields');
      return;
    }

    if (isNaN(amount)){
      alert('Please enter a valid amount');
      return;
    }

    onAddTransaction({
      description,
      amount: Number(amount),
      type
    });

    setDescription('');
    setAmount('');
    setType('expense');
  };

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Description:
            <input 
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              />
          </label>
        </div>
        <div>
          <label>
            Amount:
            <input 
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              />
          </label>
        </div>
        <div>
          <label>
            Type:
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TransactionForm;