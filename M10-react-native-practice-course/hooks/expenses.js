import httpInstance from "../httpClient/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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

export const usePostExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      try {
        return await httpInstance.post("expensesjson", data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    onSuccess: (responsedata, variables) => {
      queryClient.setQueryData(["expenses"], (oldData) => [
        ...oldData,
        { ...variables, id: responsedata.data.name },
      ]);
    },
  });
};

export const useGetExpense = () => {
  return useQuery({
    queryKey: ["expenses"],
    queryFn: async () => {
      // try {
      const response = await httpInstance.get("expenses.json");
      return transfromResponse(response, []);
      //  const expensesList =  expensesList;
      // } catch (error) {
      //   throw error;
      // }
    },
  });
};
