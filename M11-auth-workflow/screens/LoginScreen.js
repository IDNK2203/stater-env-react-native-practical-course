import { Alert, Text } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { useLogin } from "../hooks/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useAuthContext } from "../store/authContext";
import { storeData } from "../asyncStore/store";

function LoginScreen({ navigation }) {
  const { dispatch } = useAuthContext();
  const { mutate: loginMutation, isLoading, error: LoginError } = useLogin();

  const loginHandler = (data) => {
    loginMutation(data, {
      onSuccess: (data) => {
        console.log(data);
        const tokenObj = {
          access: data?.data?.idToken,
          refresh: data?.data?.refreshToken,
          issAt: Date.now(),
        };
        dispatch({
          type: "SIGNIN_LOGIN",
          payload: {
            email: data.data.email,
          },
        });
        storeData("token", tokenObj);
      },
    });
  };

  if (isLoading) {
    return <LoadingOverlay message={"Logging in the User"} />;
  }

  if (LoginError) {
    Alert.alert("Authentication Failed", LoginError.message);
  }

  return (
    <>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </>
  );
}

export default LoginScreen;
