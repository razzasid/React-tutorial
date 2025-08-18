import { useState } from "react";
import "./App.css";
import ExpenseForm from "../components/expenseForm";
import ExpenseTable from "../components/ExpenseTable";
import expenseData from "../expenseData";
import { AppProvider } from "../contexts/useAppContext";

function App() {
  const [expenses, setExpenses] = useState(expenseData);

  return (
    <AppProvider>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} />
          <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
        </div>
      </main>
    </AppProvider>
  );
}

export default App;
