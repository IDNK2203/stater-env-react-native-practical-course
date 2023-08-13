import httpInstance from "../httpClient/client";

export const usePostExpense = async (data) => {
  try {
    const expense = await httpInstance.post("expenses.json", data);
    return expense;
  } catch (error) {
    console.log(error);
  }
};

export const useGetExpense = async (data) => {
  try {
    const response = await httpInstance.get("expenses.json");
    console.log(response.data);
    const expensesList = [];

    for (const key in response.data) {
      const expenseItem = {
        id: key,
        description: response.data[key].description,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
      };
      expensesList.push(expenseItem);
    }

    return expensesList;
  } catch (error) {
    console.log(error);
  }
};
