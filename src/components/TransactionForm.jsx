function TransactionForm() {
  return (
    <div>
      <h3>agregar transaccion</h3>
      <form>
        <label>
          Descripción:
          <input type="text"/>
        </label>
        <label>
          Monto:
          <input type="number"/>
        </label>
        <label>
          Tipo:
          <select>
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