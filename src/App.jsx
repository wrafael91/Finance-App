import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div>
      <h1>App de finanzas</h1>
      <Dashboard />
      <TransactionForm />
      <TransactionList />
    </div>
  );
}

export default App;