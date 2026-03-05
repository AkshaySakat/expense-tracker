const pool = require('../config/db');

exports.createExpense = async ({ title, amount, category, date, notes }) => {
  const query = `
    INSERT INTO expenses (title, amount, category, date, notes)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `;

  const values = [title, amount, category, date, notes];

  const result = await pool.query(query, values);

  return result.rows[0];
};

exports.getAllExpenses = async () => {
  const query = `
    SELECT * FROM expenses
    ORDER BY date DESC
  `;

  const result = await pool.query(query);

  return result.rows;
};

exports.getExpenseById = async (id) => {
  const query = `
    SELECT * FROM expenses
    WHERE id = $1
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0];
};