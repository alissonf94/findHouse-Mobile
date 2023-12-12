import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconVisibility from "react-native-vector-icons/MaterialIcons";
import Styles from "./stylesSignIn";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import * as AuthService from "../../services/auhtService/AuthService"
import Toast from 'react-native-toast-message';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const navigation = useNavigation();
  const [textInputEmail, setTextInputEmail] = useState("");
  const [textInputPassword, setTextInputPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async ()=>{
    checkTextInput()
    
    const data = 
    {
      email: textInputEmail,
      password: textInputPassword,
    }

    try {
      const response =  await AuthService.loginService(data)
      let result = await response.json()
      
      if(response.status !== 201){
        ToastAndroid.show(result.message, ToastAndroid.SHORT);
      }
      else{
        await AsyncStorage.setItem("token", `Bearer ${result.token}`)
        await AsyncStorage.setItem("name", `${result.name}`)
        navigation.navigate("Houses" as never);
        
      }
    } 
    catch (error) {
      
    }
  }

  const checkTextInput = () => {
    if (!textInputEmail.trim()) {
      alert("Type your email");
      return;
    } else if (!textInputPassword.trim()) {
      alert("Type your password");
      return;
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
        <Text style={Styles.message}>Welcome Back!</Text>
      </Text>
      <ScrollView style={Styles.containerform}>
        <Text style={Styles.label}>Email</Text>
        <TextInput
          placeholder="Your email"
          style={Styles.input}
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
            size={24}
            color="black"
          />
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button} onPress={()=> handleSubmit()}>
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
      <Toast/>
    </View>
  );
}
