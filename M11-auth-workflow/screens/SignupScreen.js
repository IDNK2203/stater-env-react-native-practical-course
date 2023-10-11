import { storeData } from "../asyncStore/store";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useSignup } from "../hooks/auth";
import { useAuthContext } from "../store/authContext";
import { Alert } from "react-native";

function SignupScreen() {
  const { dispatch } = useAuthContext();
  const { mutate: signUpMutation, isLoading, error: signUpError } = useSignup();

  const signUpHandler = (data) => {
    signUpMutation(data, {
      onSuccess: (data) => {
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

  if (signUpError) {
    Alert.alert("Authentication Failed", signUpError.message);
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
