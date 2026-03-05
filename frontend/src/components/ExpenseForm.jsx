import { useState } from "react";
import { createExpense } from "../services/expenseApi";

function ExpenseForm({ refreshExpenses }) {

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createExpense(form);

    setForm({
      title: "",
      amount: "",
      category: "",
      date: ""
    });

    refreshExpenses();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />

      <input
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;