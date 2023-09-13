import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from "../store/authContext";
import * as SplashScreen from "expo-splash-screen";

const AuthCheck = ({ children }) => {
  const { dispatch, state } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        console.log(token);
        if (token) {
          dispatch({
            type: "SIGNIN_LOGIN",
            payload: {
              email: "",
              accessToken: token,
            },
          });
        }
      } catch (e) {
        // error reading value
        throw e;
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    console.log(isLoading);
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
