const { SSMClient, GetParametersByPathCommand } = require("@aws-sdk/client-ssm");
require('dotenv').config();
const client = new SSMClient({ region: "ap-south-1" });

async function loadEnv() {
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
}

module.exports = loadEnv;