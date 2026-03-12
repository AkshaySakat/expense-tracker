const expenseService = require('../services/expenseService');

exports.createExpense = async (req, res, next) => {
  try {
    console.log(" Create Expense ")
    const expense = await expenseService.createExpense(req.body);
    res.status(201).json(expense);
  } catch (error) {
    next(error);
  }
}

exports.getAllExpenses = async (req, res, next) => {
  try {
    console.log(" Get All Expenses controller called...")
    const expenses = await expenseService.getAllExpenses();
    res.json(expenses);
  } catch (error) {
    next(error);
  }
};

exports.getExpenseById = async (req, res, next) => {
  try {
    console.log(" Get Expense By Id")
    const expense = await expenseService.getExpenseById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json(expense);
  } catch (error) {
    next(error);
  }
};

exports.updateExpense = async (req, res, next) => {
  try {
      console.log(" Update Expense By Id")
      const { id } = req.params;
      const data = req.body;

      const updatedExpense = await expenseService.updateExpense(id, data);

    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

  res.json(updatedExpense);
  } catch (error) {
    next(error);
  }
  
};

exports.deleteExpense = async (req, res, next) => {
  try {
     console.log(" Delete Expense By Id")
  const { id } = req.params;

  const deleted = await expenseService.deleteExpense(id);

  if (!deleted) {
    return res.status(404).json({ message: "Expense not found" });
  }

  res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    next(error);
  }
 
};