import { StatusBar } from "expo-status-bar";
import CategoryListing from "./screens/CategoryListing";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./screens/Category";
import Meal from "./screens/Meal";
import Colors from "./utils/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.bg },
          contentStyle: { backgroundColor: Colors.bg },
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
        <Stack.Screen name='Meal' component={Meal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
