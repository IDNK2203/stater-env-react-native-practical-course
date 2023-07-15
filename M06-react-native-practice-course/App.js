import { StatusBar } from "expo-status-bar";
import CategoryListing from "./screens/CategoryListing";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./screens/Category";
import Meal from "./screens/Meal";
import Colors from "./utils/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Tab.Navigator
        initialRouteName='Meal Categories'
        sceneContainerStyle={{ backgroundColor: Colors.bg }}
        screenOptions={{
          headerStyle: { backgroundColor: Colors.bg, height: 100 },

          // contentStyle: { backgroundColor: Colors.bg },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          // tabBarActiveBackgroundColor: Colors.bg,
          tabBarActiveTintColor: "#bdd9bf",
          tabBarStyle: {
            backgroundColor: "#000401",
            // width: 240,
          },
        }}
      >
        <Tab.Screen
          name='Meal Categories'
          options={{
            tabBarLabel: "Meal Categories",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='md-home' size={18} color={color} />
            ),
          }}
          component={CategoryListing}
        />
        <Tab.Screen
          name='Meal Category'
          initialParams={{ categoryId: "c1" }}
          options={{
            tabBarLabel: "Meal Category",

            tabBarIcon: ({ color, size }) => (
              <Ionicons name='grid' size={18} color={color} />
            ),
          }}
          component={Category}
        />
        <Tab.Screen
          name='Meal'
          initialParams={{ mealId: "m1" }}
          options={{
            tabBarLabel: "Meal",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='md-fast-food' size={18} color={color} />
            ),
          }}
          component={Meal}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
