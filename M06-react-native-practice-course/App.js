import { StatusBar } from "expo-status-bar";
import CategoryListing from "./screens/CategoryListing";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./screens/Category";
import Meal from "./screens/Meal";
import Colors from "./utils/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

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
          drawerActiveBackgroundColor: Colors.bg,
          drawerActiveTintColor: "#bdd9bf",
          drawerStyle: {
            backgroundColor: "#bdd9bf",
            width: 240,
          },
        }}
      >
        <Drawer.Screen
          name='Meal Categories'
          options={{
            drawerLabel: "Meal Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name='md-home' size={18} color={color} />
            ),
          }}
          component={CategoryListing}
        />
        <Drawer.Screen
          name='Meal Category'
          options={{
            drawerLabel: "Meal Category",
            drawerIcon: ({ color, size }) => (
              <Ionicons name='grid' size={18} color={color} />
            ),
          }}
          component={Category}
        />
        <Drawer.Screen
          name='Meal'
          options={{
            drawerLabel: "Meal",
            drawerIcon: ({ color, size }) => (
              <Ionicons name='md-fast-food' size={18} color={color} />
            ),
          }}
          component={Meal}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
