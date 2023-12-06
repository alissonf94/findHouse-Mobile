import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Styles from "./stylesRegister";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid
} from "react-native";
import React from "react";
import IconVisibility from "react-native-vector-icons/MaterialIcons";
import * as UserService from "../../services/userService/UserService"

export default function App() {
  const navigation = useNavigation();
  const [textInputPassword, setTextInputPassword] = useState("");
  const [textInputCpf, setTextInputCpf] = useState("");
  const [textInputConfirmPassword, setTextInputConfirmPassword] = useState("");
  const [textInputName, setTextInputName] = useState("");
  const [textInputEmail, setTextInputEmail] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async () => {
    checkTextInput();

    const data = {
      name: textInputName,
      cpf: textInputCpf,
      email: textInputEmail,
      password: textInputPassword
    }

    const response = await UserService.createUser(data)
    const result = await response.json()

    if (response.status !== 201) {
      ToastAndroid.show(result.message, ToastAndroid.SHORT);
    }
    
    else 
    {
      navigation.navigate("SignIn" as never);
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const checkTextInput = () => {
    if (!textInputName.trim()) {
      alert("Type your name");
      return;
    } else if (!textInputCpf.trim()) {
      alert("Type your CPF");
      return;
    } else if (!textInputEmail.trim()) {
      alert("Type your email");
      return;
    } else if (!textInputPassword.trim()) {
      alert("Type your password");
      return;
    } else if (!textInputConfirmPassword.trim()) {
      alert("Confirm your password");
      return;
    } else if (textInputConfirmPassword !== textInputPassword) {
      alert("Your password isn't match");
      return;
    } else {
      navigation.navigate("Houses" as never);
    }
  };

  return (
    <View style={Styles.container}>
      <Icon
        style={Styles.icon}
        name="arrow-back-outline"
        size={30}
        color="#fff"
        onPress={() => navigation.navigate("Welcome" as never)}
      />
      <Text style={Styles.containerHeader}>
        <Text style={Styles.message}>Create Your Account!</Text>
      </Text>
      <ScrollView style={Styles.containerform}>
        <Text style={Styles.label}>Complete name</Text>
        <TextInput
          placeholder="Your name"
          style={Styles.input}
          value={textInputName}
          onChangeText={(value) => setTextInputName(value)}
        />
        <Text style={Styles.label}>CPF</Text>
        <TextInput
          placeholder="Your cpf"
          style={Styles.input}
          onChangeText={(value) => setTextInputCpf(value)}
        />
        <Text style={Styles.label}>Email</Text>
        <TextInput
          placeholder="Your email"
          style={Styles.input}
          value={textInputEmail}
          onChangeText={(value) => setTextInputEmail(value)}
        />
        <Text style={Styles.label}>Password</Text>
        <TextInput
          placeholder="Your password"
          style={Styles.input}
          secureTextEntry={!isPasswordVisible}
          value={textInputPassword}
          onChangeText={(value) => setTextInputPassword(value)}
        />
        <TouchableOpacity
          style={Styles.iconContainer}
          onPress={togglePasswordVisibility}
        >
          <IconVisibility
            name={isPasswordVisible ? "visibility" : "visibility-off"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
        <Text style={Styles.label}>Confirm password</Text>
        <TextInput
          placeholder="Your password"
          style={Styles.input}
          secureTextEntry={true}
          value={textInputConfirmPassword}
          onChangeText={(value) => setTextInputConfirmPassword(value)}
        />

        <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
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
