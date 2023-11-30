import Styles from "./styleItemFavoriteHouse";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native";
import { FavoriteHouse } from "../../Data/FavoriteHouses";
import Icon from "react-native-vector-icons/AntDesign";

export default function App({name, image, price }: FavoriteHouse) {
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={image} />
      <View style={Styles.containerText}>
        <Text style={Styles.textName}>{name}</Text>
        <Text style={Styles.textPrice}>R$ {price}</Text>
        <View style={Styles.options}>
          <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}> CONTINUE </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="delete" size={18}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
