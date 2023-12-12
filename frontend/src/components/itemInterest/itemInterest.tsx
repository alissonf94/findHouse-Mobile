import Styles from "./styleItemInterest";
import { View, Image, TouchableOpacity, Text, Button } from "react-native";
import { Interest } from "../../types/RootStackParamList"
import Icon from "react-native-vector-icons/AntDesign";

export default function App({_id, name , email, phone, immobile }: Interest) {
  return (
    <View style={Styles.container}>
    <View style={Styles.containerHouse}>
      <Text numberOfLines={3} style={Styles.textHouse}>{immobile.name}</Text>
    </View>
    <View style={Styles.containerBroker}>
      <Text numberOfLines={3} style={Styles.textName}>Broker: {immobile.agent}</Text>
    </View>
  </View>
  );
}


