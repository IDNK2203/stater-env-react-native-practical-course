import axios from "axios";

export default httpInstance = axios.create({
  baseURL:
    "https://rn-practical-course-default-rtdb.europe-west1.firebasedatabasex.app/",
  // timeout: 1000,
  headers: { "X-Custom-Header": "RN-expense-trancker" },
});
