import { useState } from "react";

function TransactionForm({onAddTransaction}) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      alert('Por favor completa todos los campos');
      return;
    }

    onAddTransaction({
      description,
      amount: Number(amount),
      type
    });
  }

  return (
    <div>
      <h3>agregar transaccion</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Descripción:
          <input 
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </label>
        <label>
          Monto:
          <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
        </label>
        <label>
          Tipo:
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="income">Ingreso</option>
            <option value="expense">Gasto</option>
          </select>
        </label>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default TransactionForm;