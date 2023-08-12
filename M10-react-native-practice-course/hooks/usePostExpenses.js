import httpInstance from "../httpClient/client";

export const usePostExpense = async (data) => {
  try {
    const expense = await httpInstance.post("expenses.json", data);
    return expense;
  } catch (error) {
    console.log(error);
  }
};
