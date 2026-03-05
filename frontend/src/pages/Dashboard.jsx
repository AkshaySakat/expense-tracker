import { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { getExpenses } from "../services/expenseApi";

function Dashboard() {

  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await getExpenses();
    setExpenses(res.data);
  };

  useEffect(() => {

    const loadExpenses = async () => {
      const res = await getExpenses();
      setExpenses(res.data);
    };

    loadExpenses();

  }, []);

  return (
    <div>

      <h1>Expense Tracker</h1>

      <ExpenseForm refreshExpenses={fetchExpenses} />

      <ExpenseList
        expenses={expenses}
        refreshExpenses={fetchExpenses}
      />

    </div>
  );
}

export default Dashboard;