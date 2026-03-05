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