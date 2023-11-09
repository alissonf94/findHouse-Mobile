import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import Routes from "./src/routes";

import { Montserrat_700Bold, useFonts, Montserrat_100Thin } from "@expo-google-fonts/montserrat";

import { Inter_100Thin } from "@expo-google-fonts/inter";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function App() {
  let [fonsLoad, fontsErro] = useFonts({
    Montserrat_700Bold,
    Montserrat_100Thin,
    Inter_100Thin,
    Roboto_700Bold
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
