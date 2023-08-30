import httpInstance from "../httpClient/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { API_KEY } from "@env";
console.log(API_KEY);

export const useSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      return await httpInstance.post("accounts:signUp?key=" + API_KEY, {
        ...data,
        returnSecureToken: true,
      });
    },
    onError: (error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      // console.log(error.response.headers);
      console.log(error.response.message);

      console.log(error.request);
    },
    onSuccess: (responsedata, variables) => {
      queryClient.setQueryData(["auth"], (oldData) => [
        { ...variables, id: responsedata.data.name },
      ]);
    },
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      return await httpInstance.post(
        "accounts:signInWithPassword?key=" + process.env.API_KEY,
        { ...data, returnSecureToken: true }
      );
    },
    onSuccess: (responsedata, variables) => {
      queryClient.setQueryData(["auth"], (oldData) => [
        { ...variables, id: responsedata.data.name },
      ]);
    },
  });
};
