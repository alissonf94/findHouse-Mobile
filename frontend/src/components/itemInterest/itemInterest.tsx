import Styles from "./styleItemInterest";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native";
import { Interest } from "../../types/RootStackParamList"
import Icon from "react-native-vector-icons/AntDesign";

export default function App({_id, name , email, phone, immobile }: Interest) {
  return (
    <View style={Styles.container}>
      <View style={Styles.containerHouse}>
        <Text style={Styles.textHouse}>{immobile.name}</Text>
      </View>
      <View>
        <Text style={Styles.textName}>Broker: {immobile.agent}</Text>
      </View>
    </View>
  );
}
