import httpInstance from "../httpClient/client";

function transfromResponse(response, expensesList) {
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
}

export const useUpdateExpense = async (data, id) => {
  try {
    const response = await httpInstance.put(`expenses/${id}.json`, data);
    const expensesList = transfromResponse(response, []);

    return expensesList;
  } catch (error) {
    throw error;
  }
};
export const useDeleteExpense = async (id) => {
  try {
    const expense = await httpInstance.delete(`expenses/${id}.json`);
    console.log(expense);
    return expense;
  } catch (error) {
    console.log("error");
    throw error;
  }
};

export const usePostExpense = async (data) => {
  try {
    const expense = await httpInstance.post("expenses.json", data);
    return expense;
  } catch (error) {
    throw error;
  }
};

export const useGetExpense = async () => {
  try {
    const response = await httpInstance.get("expenses.json");
    const expensesList = transfromResponse(response, []);
    return expensesList;
  } catch (error) {
    throw error;
  }
};
