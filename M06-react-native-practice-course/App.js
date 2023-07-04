import { StatusBar } from "expo-status-bar";
import Category from "./screens/Category";
import { Text, View } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Category />
    </>
  );
}
