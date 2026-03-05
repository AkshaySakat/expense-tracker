const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/expenses', expenseController.createExpense);
router.get('/expenses', expenseController.getAllExpenses);
router.get('/expenses/:id', expenseController.getExpenseById);

module.exports = router;