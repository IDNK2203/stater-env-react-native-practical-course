import { StatusBar } from "expo-status-bar";
import CategoryListing from "./screens/CategoryListing";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./screens/Category";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#5a2e47" },
          contentStyle: { backgroundColor: "#412234" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
        initialRouteName='Meal Categories'
      >
        <Stack.Screen
          name='Meal Categories'
          options={{
            title: "Meal Categories",
          }}
          component={CategoryListing}
        />
        <Stack.Screen name='Meal Category' component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
