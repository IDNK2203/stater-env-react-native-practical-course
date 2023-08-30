import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useSignup } from "../hooks/auth";

function SignupScreen() {
  const {
    mutate: signUpMutation,
    isLoading,
    status,
    error: signUpError,
  } = useSignup();

  const signUpHandler = (data) => {
    signUpMutation(data, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  if (isLoading) {
    return <LoadingOverlay message={"Logging in the User"} />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
