import { deleteExpense } from "../services/expenseApi";

function ExpenseList({ expenses, refreshExpenses }) {

  const handleDelete = async (id) => {
    await deleteExpense(id);
    refreshExpenses();
  };

  return (
    <div>

      <h2>Expenses</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Notes</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.notes}</td>
              <td>{expense.date}</td>

              <td>
                <button onClick={() => handleDelete(expense.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ExpenseList;