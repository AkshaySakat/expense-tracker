const expenseRepository = require('../repositories/expenseRepository');

exports.createExpense = async (data) => {
  return await expenseRepository.createExpense(data);
};