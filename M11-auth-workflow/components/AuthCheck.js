import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { API_KEY } from "@env";
import { useAuthContext } from "../store/authContext";
import * as SplashScreen from "expo-splash-screen";
import { refreshAxios } from "../httpClient/client";
import { useMutation } from "@tanstack/react-query";
import { getData } from "../asyncStore/store";

const AuthCheck = ({ children }) => {
  const { dispatch, state } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  const refreshTokenMutation = useMutation({
    mutationFn: (token) => {
      refreshAxios.post(
        `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
        {
          grant_type: "refresh_token",
          refresh_token: token.refresh,
        }
      );
    },
  });

  const getCheckData = async () => {
    try {
      const token = await getData("token");
      if (token && Date.now() - token.issAt <= 3000 * 1000) {
        dispatch({
          type: "SIGNIN_LOGIN",
        });
      }
      if (token && Date.now() - token.issAt > 3000 * 1000) {
        await refreshTokenMutation.mutate(token);
        dispatch({
          type: "SIGNIN_LOGIN",
        });
      }
    } catch (e) {
      // error reading value
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCheckData();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (!isLoading) {
      await SplashScreen.hideAsync();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onLayout={onLayoutRootView}
    >
      {children}
    </View>
  );
};

export default AuthCheck;
