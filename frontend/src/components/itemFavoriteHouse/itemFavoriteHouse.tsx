import Styles from "./styleItemFavoriteHouse";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native";
import { House } from "../../types/RootStackParamList";
import Icon from "react-native-vector-icons/AntDesign";
import * as UserService from "../../services/userService/UserService"
import {useNavigation} from '@react-navigation/native';

export default function App({_id, name, imageProfile, images, description,price, agent, city}:House) {
  const navigation = useNavigation<any>();
 
  const house  = {
    _id: _id,
    name: name,
    imageProfile: imageProfile,
    images: images,
    description: description,
    price: price,
    agent: agent,
    city: city
  }
  const removeFavorites = async (idImmobile:any)=>{
    const response = await UserService.deletImmbileFavorites(idImmobile)    
   
  }
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={{uri: imageProfile}} />
      <View style={Styles.containerText}>
        <Text style={Styles.textName}>{name}</Text>
        <Text style={Styles.textPrice}>R$ {price}</Text>
        <View style={Styles.options}>
          <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate("Contact", {'house':house })}>
            <Text style={Styles.buttonText}> CONTINUE </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> removeFavorites(_id)}>
            <Icon name="delete" size={18} ></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
