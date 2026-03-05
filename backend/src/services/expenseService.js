const expenseRepository = require('../repositories/expenseRepository');

exports.createExpense = async (data) => {
  return await expenseRepository.createExpense(data);
};

exports.getAllExpenses = async () => {
  return await expenseRepository.getAllExpenses();
};

exports.getExpenseById = async (id) => {
  return await expenseRepository.getExpenseById(id);
};


exports.updateExpense = async (id, data) => {
  return await expenseRepository.updateExpense(id, data);
};

exports.deleteExpense = async (id) => {
  return await expenseRepository.deleteExpense(id);
};