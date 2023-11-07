import { StatusBar, Image } from "react-native";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Styles from "./styleProfile";
import { useNavigation } from "@react-navigation/native";

export default function EditProfile() {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Icon
        style={Styles.icon}
        name="chevron-back-outline"
        size={30}
        color="#fff"
        onPress={() => navigation.navigate("Houses" as never)}
      />
      <Image
        source={require("../../images/personIconExample.png")} // You should replace this with the actual source of the profile photo
        style={Styles.profileImage}
      />
      <Text style={Styles.containerHeader}>
        <Text style={Styles.message}>Edit Your Profile</Text>
      </Text>
      <ScrollView style={Styles.containerform}>
        <Text style={Styles.label}>Full Name</Text>
        <TextInput placeholder="Your full name" style={Styles.input} />
        <Text style={Styles.label}>Username</Text>
        <TextInput placeholder="Your username" style={Styles.input} />
        <Text style={Styles.label}>Email</Text>
        <TextInput placeholder="Your email" style={Styles.input} />
        <Text style={Styles.label}>New Password</Text>
        <TextInput placeholder="Enter new password" style={Styles.input} />
        <Text style={Styles.label}>Confirm New Password</Text>
        <TextInput placeholder="Confirm new password" style={Styles.input} />
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.buttonRegister}
          onPress={() => navigation.navigate("Houses" as never)}
        >
          <Text style={Styles.registerText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar/>
    </View>
  );
}