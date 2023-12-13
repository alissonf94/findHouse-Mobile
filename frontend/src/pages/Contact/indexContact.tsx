import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Styles from "./styleContact";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import * as userService from "../../services/userService/UserService";

export default function Contact() {
  const route: any = useRoute();
  const house = route.params.house;
  const navigation = useNavigation();
  const [textInputName, setTextInputName] = useState("");
  const [textInputEmail, setTextInputEmail] = useState("");
  const [textInputPhone, setTextInputPhone] = useState("");

  const checkTextInput = () => {
    if (!textInputName.trim()) {
      alert("Type your name");
      return;
    } else if (!textInputPhone.trim()) {
      alert("Type your phone");
      return;
    } else if (!textInputEmail.trim()) {
      alert("Type your email");
      return;
    }
  };

  const formatPhoneNumber = (phoneNumber: any) => {
    const cleaned = phoneNumber.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      const groups = match
        .slice(1)
        .filter((group: string) => group.length > 0)
        .map((group: string) => group.trim());
      return `(${groups[0]})${groups[1]}-${groups[2]}`;
    }

    return phoneNumber;
  };

  const handleSubmit = async () => {
    checkTextInput();
    const data = {
      name: textInputName,
      email: textInputEmail,
      phone: textInputPhone,
    };

    const idImmobile = house._id;

    const response = await userService.addImmbileInterest(idImmobile, data);
    const result = await response.json();

    if (response.status === 201) {
      ToastAndroid.show("Immbile add interest", ToastAndroid.SHORT);
      navigation.navigate("Houses" as never);
    } else {
      ToastAndroid.show(result.message, ToastAndroid.SHORT);
    }
  };
  return (
    <View style={Styles.container}>
      <Icon
        style={Styles.icon}
        name="arrow-back-outline"
        size={30}
        color="#fff"
        onPress={() => navigation.navigate("Houses" as never)}
      />
      <Text style={Styles.containerHeader}>
        <Text style={Styles.message}>I have interested in this property</Text>
      </Text>
      <ScrollView style={Styles.containerform}>
        <Text style={Styles.label}>Complete name</Text>
        <TextInput
          placeholder="Your name"
          style={Styles.input}
          value={textInputName}
          onChangeText={(value) => setTextInputName(value)}
        />
        <Text style={Styles.label}>Phone</Text>
        <TextInput
          placeholder="Your phone"
          style={Styles.input}
          value={formatPhoneNumber(textInputPhone)}
          onChangeText={(value) => {
            const numericValue = value.replace(/\D/g, "");

            const truncatedValue = numericValue.slice(0, 11);

            const formattedPhoneNumber = formatPhoneNumber(truncatedValue);
            setTextInputPhone(formattedPhoneNumber);
          }}
        />
        <Text style={Styles.label}>Email</Text>
        <TextInput
          placeholder="Your email"
          style={Styles.input}
          value={textInputEmail}
          onChangeText={(value) => setTextInputEmail(value)}
        />
      </ScrollView>
      <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
        <Text style={Styles.buttonText}>Entry Contact</Text>
      </TouchableOpacity>
    </View>
  );
}
