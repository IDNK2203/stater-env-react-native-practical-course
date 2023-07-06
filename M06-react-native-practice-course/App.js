import { StatusBar } from "expo-status-bar";
import CategoryListing from "./screens/CategoryListing";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./screens/Category";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Stack.Navigator initialRouteName='Meal Categories'>
        <Stack.Screen name='Meal Categories' component={CategoryListing} />
        <Stack.Screen name='Meal Category' component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
