import { Alert, Text } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { useLogin } from "../hooks/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useAuthContext } from "../store/authContext";

function LoginScreen({ navigation }) {
  const { dispatch, state } = useAuthContext();
  const {
    mutate: loginMutation,
    isLoading,
    status,
    error: LoginError,
  } = useLogin();

  const loginHandler = (data) => {
    loginMutation(data, {
      onSuccess: (data) => {
        // console.log(data.data);
        dispatch({
          type: "SIGNIN_LOGIN",
          payload: {
            email: data.data.email,
            accessToken: data?.data?.accessToken,
          },
        });
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
      <Text>email: {state?.user?.email}</Text>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </>
  );
}

export default LoginScreen;
