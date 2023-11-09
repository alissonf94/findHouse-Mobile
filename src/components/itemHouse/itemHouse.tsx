import Styles from "./styleItemHouse"
import { House} from '../../Data/ListHouses'
import {View, Image} from 'react-native'
import { Text, TouchableOpacity } from "react-native"
import { useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function App({name, imageApresentation,images, description,price}:House){
    
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    
    const goToHouse = () => {
        navigation.navigate('House',{house: {name, imageApresentation,images, description,price}})
      };

    return(
    <View  >
        <TouchableOpacity style={Styles.container} onPress={ ()=> goToHouse()}>
            <Image style= {Styles.image} source={imageApresentation}/>
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
