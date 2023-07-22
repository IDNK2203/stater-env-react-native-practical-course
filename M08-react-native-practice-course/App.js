import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ManageExpense from "./screens/ManageExpense";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colorPallete } from "./utils/colors";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const ExpenseOverView = () => {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{
        backgroundColor: colorPallete.Richblack,
        borderWidth: 0,
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: colorPallete.Richblack,
          height: 100,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        // tabBarActiveBackgroundColor: Colors.bg,
        tabBarActiveTintColor: colorPallete.Claret,
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: colorPallete.Darkpurple,
          height: 70,
          padding: 8,
        },
        tabBarLabelStyle: {
          bottom: 8,
          fontWeight: "bold",
          borderWidth: 0,
          marginVertical: 10,
        },
      }}
    >
      <BottomTab.Screen
        options={{
          title: " Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass-outline' color={color} size={size} />
          ),
        }}
        name={"RecentExpenses"}
        component={RecentExpenses}
      />
      <BottomTab.Screen
        options={{
          title: " All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='list-circle-outline' color={color} size={size} />
          ),
        }}
        name={"AllExpenses"}
        component={AllExpenses}
      />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={"ExpenseOverView"}
          component={ExpenseOverView}
        />
        <Stack.Screen name={"ManageExpense"} component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
