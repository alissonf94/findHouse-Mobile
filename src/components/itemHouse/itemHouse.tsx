import Styles from "./styleItemHouse"
import { House} from '../../Data/ListHouses'
import {View, Image} from 'react-native'
import { Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function App({name, image, description,price}:House){
    const navigation = useNavigation()
    return(
    <View  >
        <TouchableOpacity activeOpacity={0} style={Styles.container} onPress={ ()=> navigation.navigate('House' as never)}>
            <Image style= {Styles.image} source={image}/>
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
