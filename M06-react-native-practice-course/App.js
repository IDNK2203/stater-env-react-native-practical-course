import { StatusBar } from "expo-status-bar";
import Category from "./screens/Category";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Meal from "./screens/Meal";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Stack.Navigator initialRouteName='Meal Categories'>
        <Stack.Screen name='Meal Categories' component={Category} />
        <Stack.Screen name='Meal' component={Meal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
