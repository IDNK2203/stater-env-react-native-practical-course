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

export const useUpdateExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data, id) => {
      const response = httpInstance.put(`expenses/${id}.json`, data);
      return transfromResponse(response, []);
    },
    onSuccess: (responsedata, variables) => {
      queryClient.setQueryData(
        ["expenses", { id: variables.id }],
        (oldData) => [...oldData, { ...variables, id: responsedata.data.name }]
      );
    },
  });
};

export const useDeleteExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      return await httpInstance.delete(`expenses/${id}.json`);
    },
    onSuccess: (_responsedata, id) => {
      queryClient.setQueryData(["expenses"], (oldData) => ({
        ...oldData.filter((item) => id !== item.id),
      }));
    },
  });
};

export const usePostExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      return await httpInstance.post("expenses.json", data);
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
      const response = await httpInstance.get("expenses.json");
      return transfromResponse(response, []);
    },
  });
};
