import axios from "axios";
import { BASE_URL } from "@env";

export default httpInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "X-Custom-Header": "RN-expense-trancker" },
});
