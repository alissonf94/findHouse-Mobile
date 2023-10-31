import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

import { Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";

export default function App() {
  let [fonsLoad, fontsErro] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsErro && !fonsLoad) {
    return null;
  }
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
