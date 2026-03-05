const express = require('express');
const cors = require('cors');
const expenseRoutes = require('./routes/expenseRoutes');
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorMiddleware);

app.use('/api', expenseRoutes);

app.get('/health', (req, res)=>{
    res.json({status: 'ok'});
});

module.exports = app;