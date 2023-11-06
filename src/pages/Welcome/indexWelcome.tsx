import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import Styles from "./styleWelcome";
import { useNavigation } from "@react-navigation/native";

export default function Main() {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={Styles.background}
        source={require("../../images/background.png")}
        resizeMode="cover"
      >
        <Image source={require("../../images/logo.png")} />

        <View style={Styles.buttons}>
          <TouchableOpacity
            style={Styles.buttonLogin}
            onPress={() => navigation.navigate("SignIn" as never)}
          >
            <Text style={Styles.textButton}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.buttonRegister}
            onPress={() => navigation.navigate("Register" as never)}
          >
            <Text style={Styles.textButton}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
