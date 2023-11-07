import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewBase,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Styles from "./stylesSignIn";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <Icon
        style={Styles.icon}
        name="chevron-back-outline"
        size={30}
        color="#fff"
        onPress={() => navigation.navigate("Welcome" as never)}
      />
      <Text style={Styles.containerHeader}>
        <Text style={Styles.message}>Welcome Back!</Text>
      </Text>
      <ScrollView style={Styles.containerform}>
        <Text style={Styles.label}>Email</Text>
        <TextInput placeholder="Your email..." style={Styles.input} />
        <Text style={Styles.label}>Password</Text>
        <TextInput placeholder="Your password" style={Styles.input} />
        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate("Houses" as never)}
        >
          <Text style={Styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.buttonRegister}
          onPress={() => navigation.navigate("Register" as never)}
        >
          <Text style={Styles.registerText}>Don't have account? Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
