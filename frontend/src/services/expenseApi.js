import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const getExpenses = () => API.get("/api/expenses");

export const createExpense = (data) => API.post("/api/expenses", data);

export const deleteExpense = (id) => API.delete(`/api/expenses/${id}`);