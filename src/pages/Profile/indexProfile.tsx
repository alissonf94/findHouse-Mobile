import { StatusBar, Image } from "react-native";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from '@expo/vector-icons'; // Make sure to import Ionicons from the correct package
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
      <View style={Styles.logoutContent}>
        <Ionicons
          name="exit" // Use "exit" as the icon name for log out
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
      </ScrollView>
      <StatusBar/>
    </View>
  );
}