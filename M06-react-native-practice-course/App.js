import { StatusBar } from "expo-status-bar";
import CategoryListing from "./screens/CategoryListing";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./screens/Category";
import Meal from "./screens/Meal";
import Colors from "./utils/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";

// const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Drawer.Navigator
        initialRouteName='Meal Categories'
        screenOptions={{
          headerStyle: { backgroundColor: Colors.bg, height: 100 },
          sceneContainerStyle: { backgroundColor: Colors.bg },
          // contentStyle: { backgroundColor: Colors.bg },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          drawerStyle: {
            backgroundColor: "#ffc857",
            width: 240,
          },
        }}
      >
        <Drawer.Screen
          name='Meal Categories'
          options={{
            title: "Meal Categories",
          }}
          component={CategoryListing}
        />
        <Drawer.Screen name='Meal Category' component={Category} />
        <Drawer.Screen name='Meal' component={Meal} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
