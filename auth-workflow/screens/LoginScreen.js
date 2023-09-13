import { Alert, Text } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { useLogin } from "../hooks/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useAuthContext } from "../store/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useStorage } from "../store/useStorage";

function LoginScreen({ navigation }) {
  // const [token, setToken] = useStorage("token");
  const { dispatch, state } = useAuthContext();
  const {
    mutate: loginMutation,
    isLoading,
    status,
    error: LoginError,
  } = useLogin();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("token", value);
    } catch (e) {
      // saving error
      throw e;
    }
  };

  const loginHandler = (data) => {
    loginMutation(data, {
      onSuccess: (data) => {
        // console.log(data.data);
        dispatch({
          type: "SIGNIN_LOGIN",
          payload: {
            email: data.data.email,
            accessToken: data?.data?.idToken,
          },
        });
        storeData(data?.data?.idToken);

        // navigation.navigate("Welcome");
      },
    });
  };

  if (isLoading) {
    return <LoadingOverlay message={"Logging in the User"} />;
  }

  if (LoginError) {
    Alert.alert("Authentication Failed", "Please check your email or password");
  }

  return (
    <>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </>
  );
}

export default LoginScreen;
