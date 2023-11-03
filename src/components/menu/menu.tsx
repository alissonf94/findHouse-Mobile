import { View } from "react-native";
import Styles from "./styleMenu";
import  IconShopping  from "react-native-vector-icons/FontAwesome";
import IconUser from "react-native-vector-icons/Feather"
import IconHome from 'react-native-vector-icons/Entypo'
import { useNavigation } from "@react-navigation/native";

export default function App(){
    const navigation = useNavigation()
    return(
        <View style={Styles.container}>
            <IconHome name="home" color={'#675D50'} size={25} onPress={()=> navigation.navigate('Welcome' as never)}/>
            <IconShopping name="shopping-cart" color={'#675D50'} size={25}/>
            <IconUser name="user" color={'#675D50'} size={25}/>
        </View>
    )
}