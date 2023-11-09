import { StatusBar, Image } from "react-native";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from '@expo/vector-icons';
import Styles from "./styleProfile";
import IconVisibility from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function EditProfile() {
  const navigation = useNavigation();
  const [textInputFullName, setTextInputName] = useState("");
  const [textInputusername, setTextInputUsername] = useState("");
  const [textInputEmail, setTextInputEmail] = useState("");
  const [textInputPassword, setTextInputPassword] = useState("");
  const [textInputConfirmPassword, setTextInputConfirmPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const checkTextInput = () => {
    if (!textInputFullName || !textInputFullName.trim()) {
      alert("Type your Full Name");
    } else if (!textInputusername || !textInputusername.trim()) {
      alert("Type your username");
    } else if (!textInputEmail || !textInputEmail.trim()) {
      alert("Type your E-mail");
    } else if (!textInputPassword || !textInputPassword.trim()) {
      alert("Type your password");
    } else if (!textInputConfirmPassword || !textInputConfirmPassword.trim()) {
      alert("Confirm your password");
    } else {
      navigation.navigate("Houses" as never);
    }
  };
  

  return (
    <View style={Styles.container}>
      <Icon
        style={Styles.icon}
        name="chevron-back-outline"
        size={30}
        color="#fff"
        onPress={() => navigation.navigate("Houses" as never)}
      />
      <View style={Styles.logoutContent}>
        <Ionicons
          name="exit"
          size={30}
          color="#fff"
          style={Styles.logoutIcon}
          onPress={() => navigation.navigate("Welcome" as never)}
        />
      </View>
      <Image
        source={require("../../images/personIconExample.png")}
        style={Styles.profileImage}
      />
      <Text style={Styles.containerHeader}>
        <Text style={Styles.message}>Edit Your Profile</Text>
      </Text>
      <ScrollView style={Styles.containerform}>
        <Text style={Styles.label}>Full Name</Text>
        <TextInput
          placeholder="Your Full name"
          style={Styles.input}
          value={textInputFullName}
          onChangeText={(value) => setTextInputName(value)}
        />
        <Text style={Styles.label}>Username</Text>
        <TextInput
          placeholder="Your username"
          style={Styles.input}
          value={textInputusername}
          onChangeText={(value) => setTextInputUsername(value)}
        />
        <Text style={Styles.label}>Email</Text>
        <TextInput
          placeholder="Your email"
          style={Styles.input}
          value={textInputEmail}
          onChangeText={(value) => setTextInputEmail(value)}
        />
        <Text style={Styles.label}>New Password</Text>
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
            name={isPasswordVisible ? "eye" : "eye-slash"}
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

        <TouchableOpacity style={Styles.button} onPress={checkTextInput}>
          <Text style={Styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar/>
    </View>
  );
}