import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewBase,
} from "react-native";
import Styles from "./stylesRegister";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text style={Styles.containerHeader}>
        <Text style={Styles.message}>Create Your Account!</Text>
      </Text>
      <ScrollView style={Styles.containerform}>
        <Text style={Styles.label}>Complete name</Text>
        <TextInput placeholder="Your name" style={Styles.input} />
        <Text style={Styles.label}>CPF</Text>
        <TextInput placeholder="Your cpf" style={Styles.input} />
        <Text style={Styles.label}>Email</Text>
        <TextInput placeholder="Your email..." style={Styles.input} />
        <Text style={Styles.label}>Password</Text>
        <TextInput placeholder="Your password" style={Styles.input} />
        <Text style={Styles.label}>Confirm password</Text>
        <TextInput placeholder="Your password" style={Styles.input} />
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.buttonRegister}
          onPress={() => navigation.navigate("SignIn" as never)}
        >
          <Text style={Styles.registerText}>Do you have account? Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
