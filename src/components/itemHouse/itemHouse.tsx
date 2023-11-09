import Styles from "./styleItemHouse"
import { House} from '../../Data/ListHouses'
import {View, Image} from 'react-native'
import { Text, TouchableOpacity } from "react-native"
import {useNavigation} from '@react-navigation/native';
export default function App({name, imageApresentation,images, description,price}:House){
    const navigation = useNavigation<any>();
    const goToHouse = () => {

        navigation.navigate('House', {'House':{name, imageApresentation,images, description,price}})
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
