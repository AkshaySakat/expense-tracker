const express = require('express');
const cors = require('cors');
const expenseRoutes = require('./routes/expenseRoutes');
const errorMiddleware = require("./middleware/errorMiddleware");
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

 console.log("Welcome to app.js ");

/* API Routes */
app.use('/api', expenseRoutes);

/* Health Check */
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// if (process.env.NODE_ENV === "production") {
/* Serve React Build */
 const rootPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(rootPath));

app.get(/^\/.*$/,(req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});
// }
/* Error Middleware (ALWAYS LAST) */
app.use(errorMiddleware);

module.exports = app;