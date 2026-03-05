import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const getExpenses = () => API.get("/api/expenses");

export const createExpense = (data) => API.post("/api/expenses", data);

export const deleteExpense = (id) => API.delete(`/api/expenses/${id}`);