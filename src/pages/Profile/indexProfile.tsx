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
import IconLogout from "react-native-vector-icons/Ionicons"
import Styles from "./styleProfile";
import IconVisibility from "react-native-vector-icons/MaterialIcons";
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
      alert("Type your name");
    } else if (!textInputusername || !textInputusername.trim()) {
      alert("Type your username");
    } else if (!textInputEmail || !textInputEmail.trim()) {
      alert("Type your email");
    } else if (!textInputPassword || !textInputPassword.trim()) {
      alert("Type your password");
    } else if (!textInputConfirmPassword || !textInputConfirmPassword.trim()) {
      alert("Your password isn't match");
    } else {
      navigation.navigate("Houses" as never);
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.logoutContent}>
        <Icon
          name="arrow-back-outline"
          size={30}
          color="#fff"
          onPress={() => navigation.navigate("Houses" as never)}
        />
        <IconLogout
          name="log-out-outline"
          size={30}
          color="#fff"
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
      </ScrollView>
      <TouchableOpacity style={Styles.button} onPress={checkTextInput}>
        <Text style={Styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
      <StatusBar />
    </View>
  );
}
