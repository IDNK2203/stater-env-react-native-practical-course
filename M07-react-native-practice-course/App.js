import { StatusBar } from "expo-status-bar";
import CategoryListing from "./screens/CategoryListing";
import { NavigationContainer } from "@react-navigation/native";
import Category from "./screens/Category";
import Meal from "./screens/Meal";
import Colors from "./utils/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favourites from "./screens/Favourites";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavContextProvider } from "./store/favContext";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNav = function () {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.bg,
          height: 100,
        },
        sceneContainerStyle: {
          backgroundColor: Colors.bg,
          overflow: "hidden",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        drawerActiveBackgroundColor: Colors.bg,
        drawerActiveTintColor: "#bdd9bf",
        drawerInactiveTintColor: "#fff",
        drawerStyle: {
          backgroundColor: "#120701",
          width: 240,
        },
      }}
      initialRouteName='Meal Categories'
    >
      <Drawer.Screen
        name='Meal Categories'
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
        component={CategoryListing}
      />
      <Drawer.Screen
        name='Favourites'
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star-sharp' color={color} size={size} />
          ),
        }}
        component={Favourites}
      />
    </Drawer.Navigator>
  );
};

// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <FavContextProvider>
      <NavigationContainer>
        <StatusBar style='light' />
        <Stack.Navigator
          initialRouteName='DrawerNav'
          screenOptions={{
            headerStyle: { backgroundColor: Colors.bg, height: 100 },

            contentStyle: { backgroundColor: Colors.bg },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name='DrawerNav'
            options={{
              headerShown: false,
            }}
            component={DrawerNav}
          />
          <Stack.Screen
            name='Meal Category'
            initialParams={{ categoryId: "c1" }}
            options={{
              title: "Meal Category",
            }}
            component={Category}
          />
          <Stack.Screen
            name='Meal'
            initialParams={{ mealId: "m1" }}
            options={{
              title: "Meal",
            }}
            component={Meal}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavContextProvider>
  );
}
