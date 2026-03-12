console.log("_____________Welcome to loadEnv.js_________");
const { SSMClient, GetParametersByPathCommand } = require("@aws-sdk/client-ssm");
require('dotenv').config();
const client = new SSMClient({ region: "ap-southeast-2" });

async function loadEnv() {
  try {
    const env = process.env.APP_ENV || "qa";
  // Skip AWS when running locally
  if (env === "local") {
    console.log("Running locally. Using .env variables.");
    return;
  }


  const command = new GetParametersByPathCommand({
    Path: `/expense-tracker/${env}/`,
    Recursive: true,
    WithDecryption: true
  });
  const response = await client.send(command);

  console.log('Load Config response :: ', response);

  response.Parameters.forEach(param => {
    const key = param.Name.split("/").pop();
    process.env[key] = param.Value;
  });

  console.log("Environment variables loaded from Parameter Store");
  } catch (error) {
    throw error;
  }
  
}

module.exports = loadEnv;