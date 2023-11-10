import Styles from "./styleItemInterest";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native";
import { Interest } from "../../Data/Interest";
import Icon from "react-native-vector-icons/AntDesign";

export default function App({ name, data, hora, local }: Interest) {
  return (
    
    <View style={Styles.containe}>
      <View style={Styles.containerTexte}>
      <Text style={Styles.textLocal}>{local}</Text>
      </View>
      <View style={Styles.containerTex}>
        <Text style={Styles.textNam}>{name}</Text>
        <View style={Styles.icon}>  
        <Icon name="calendar" size={20} color='#000'/>
        <Text style={Styles.textData}>{data}</Text>
        </View>
        <View style ={Styles.clock}>
        <Icon name="clockcircleo" size={20} color='#000'/>
        <Text style={Styles.textHora}>{hora}</Text>
        </View>
        <View style={Styles.option}>
          <TouchableOpacity style={Styles.butto}>
            <Text style={Styles.buttonTex}> CANCELAR </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

