import Styles from "./styleItemInterest";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native";
import { Interest } from "../../Data/Interest";
import Icon from "react-native-vector-icons/AntDesign";

export default function App({ name, data, hora, local }: Interest) {
  return (
    <View style={Styles.container}>
      <View style={Styles.containerHouse}>
        <Text style={Styles.textHouse}>{local}</Text>
      </View>
      <View>
        <Text style={Styles.textName}>Broker: {name}</Text>
        <View style={Styles.icon}>
          <Icon name="calendar" size={20} color="#000" />
          <Text style={Styles.textIcon}>{data}</Text>
        </View>
        <View style={Styles.icon}>
          <Icon name="clockcircleo" size={20} color="#000" />
          <Text style={Styles.textIcon}>{hora}</Text>
        </View>
        <View>
          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
