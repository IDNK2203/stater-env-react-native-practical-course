import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from "@tanstack/react-query";
import { useAppState } from "./hooks/useAppState";
import { useOnlineManager } from "./hooks/useOnlineManager";
import { AuthContextProvider, useAuthContext } from "./store/authContext";
import IconButton from "./components/ui/IconButton";
// Create a client
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

function onAppStateChange(status) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const { dispatch } = useAuthContext();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={({ navigation }) => ({
          headerRight: ({ tintColor }) => (
            <IconButton
              icon={"exit"}
              size={24}
              color={tintColor}
              onPress={() => {
                dispatch({
                  type: "LOGOUT",
                });
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const { state } = useAuthContext();

  return (
    <NavigationContainer>
      {state.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  useOnlineManager();

  useAppState(onAppStateChange);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <StatusBar style='light' />

          <Navigation />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}
