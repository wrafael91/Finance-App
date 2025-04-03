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

    if (isNaN(amount)){
      alert('Por favor ingresa un monto válido');
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
      <h3>Agregar Transacción</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Descripción:
            <input 
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              />
          </label>
        </div>
        <div>
          <label>
            Monto:
            <input 
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              />
          </label>
        </div>
        <div>
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
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default TransactionForm;