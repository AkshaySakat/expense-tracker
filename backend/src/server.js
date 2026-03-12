// require('dotenv').config();
const loadEnv = require("./config/loadEnv");

async function startServer() {
    await loadEnv();
    console.log('------------loadENV-----', process.env);
    const app = require('./app');
    app.listen(process.env.PORT, () => {
        console.log(`Server running on ${process.env.PORT}`);
  });
};
startServer();