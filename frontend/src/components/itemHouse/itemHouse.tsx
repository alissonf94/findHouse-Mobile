import Styles from "./styleItemHouse"
import {View, Image} from 'react-native'
import { Text, TouchableOpacity } from "react-native"
import {useNavigation} from '@react-navigation/native';

import { House } from "../../types/RootStackParamList";

export default function App({_id, name, imageProfile, images, description,price, agent, city}:House){
    const navigation = useNavigation<any>();
    
    const goToHouse = () => {
        navigation.navigate('House', {'House':{_id ,name, imageProfile, images, description, price, agent, city}})
      };

    return(
    <View  >
        <TouchableOpacity style={Styles.container} onPress={ ()=> goToHouse()}>
            <Image style= {Styles.image} source={{uri:imageProfile}}/>
            <View style={Styles.containerText}>
                <Text style={Styles.textName}>
                    {name}
                </Text>
                <Text  style={Styles.textDescription} >
                    {description}
                </Text>
                <Text style={Styles.textPrice}>
                    R$ {price}
                </Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}
