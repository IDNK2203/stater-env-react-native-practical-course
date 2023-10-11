import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlaces from "./screens/AddPlaces";
import IconButton from "./components/app-ui/IconButton";
import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
              textAlign: "center",
            },
            contentStyle: {
              backgroundColor: Colors.gray700,
            },
            headerTintColor: Colors.gray700,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name='AllPlaces'
            component={AllPlaces}
            options={({ navigation, route }) => ({
              title: "You Favourite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  color={tintColor}
                  type={"add"}
                  size={24}
                  onPress={() => navigation.navigate("AddPlaces")}
                />
              ),
            })}
          />
          <Stack.Screen
            options={{
              title: "Add New Place",
            }}
            name='AddPlaces'
            component={AddPlaces}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
