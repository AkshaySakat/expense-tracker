const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/expenses', expenseController.createExpense);
router.get('/expenses', expenseController.getAllExpenses);
router.get('/expenses/:id', expenseController.getExpenseById);

router.put('/expenses/:id', expenseController.updateExpense);   // ADD
router.delete('/expenses/:id', expenseController.deleteExpense); // ADD

module.exports = router;