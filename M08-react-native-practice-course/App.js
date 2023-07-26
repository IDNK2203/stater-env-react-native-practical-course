import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ManageExpense from "./screens/ManageExpense";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colorPallete } from "./utils/colors";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/IconButton";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const ExpenseOverView = () => {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{
        backgroundColor: colorPallete.Richblack,
      }}
      screenOptions={({ navigation }) => ({
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
        headerRight: ({ tintColor }) => (
          <IconButton
            iconTitle={"add"}
            size={24}
            color={tintColor}
            onPresshandler={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
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
            <Ionicons name='list-outline' color={color} size={size} />
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
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colorPallete.Darkpurple,
            height: 100,
          },

          contentStyle: { backgroundColor: colorPallete.Richblack },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={"ExpenseOverView"}
          component={ExpenseOverView}
        />

        <Stack.Screen
          options={{
            title: "Manage Expense",
            presentation: "modal",
          }}
          name={"ManageExpense"}
          component={ManageExpense}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
