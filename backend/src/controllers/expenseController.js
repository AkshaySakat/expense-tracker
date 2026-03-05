const expenseService = require('../services/expenseService');

exports.createExpense = async (req, res) => {
  try {
    const expense = await expenseService.createExpense(req.body);
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await expenseService.getAllExpenses();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExpenseById = async (req, res) => {
  try {
    const expense = await expenseService.getExpenseById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};