import Styles from "./styleItemHouse"
import { House} from '../../Data/ListHouses'
import {View, Image} from 'react-native'
import { Text } from "react-native"

export default function App({name, image, description,price}:House){
    return(
    <View style={Styles.container}>
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
    </View>
    )
}