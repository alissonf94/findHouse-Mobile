import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import Styles from "../main/style";

export default function Main() {
  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.background}
        source={require("../../images/background.png")}
        resizeMode="cover"
      >
        <Image source={require("../../images/logo.png")} />

        <View style={Styles.buttons}>
          <TouchableOpacity style={Styles.buttonLogin}>
            <Text style={Styles.textButton}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.buttonRegister}>
            <Text style={Styles.textButton}>Register</Text>
          </TouchableOpacity>
          <Text>yfgvkjgklhgkhghckjvbl</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
