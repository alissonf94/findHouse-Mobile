import { Image, Text, TouchableOpacity, View, Dimensions, ImageBackground } from 'react-native'
import Styles from './styleHouse'
import house1 from '../../images/house1.png'
import IconFavorite from "react-native-vector-icons/FontAwesome";
const house =
{
    name: "Casa no Serraville",
    img: house1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 1200000
}


export default function App() {
    return (

        <View style={Styles.container}>
            <View style={Styles.sectionImage}>
                <ImageBackground
                    style={Styles.background}
                    source={house1}
                    resizeMode="stretch"
                >
                    <IconFavorite
                        name="heart-o"
                        color={'#ffffff'}
                        size={30}
                        style={Styles.icon}
                    />

                </ImageBackground>
            </View>
            <Text style={Styles.title}>{house.name}</Text>

            <Text style={Styles.price}>R$ {house.price}</Text>

            <View style={Styles.sectionDescription}>
                <Text style={Styles.textDescription}>{house.description}</Text>
            </View>

            <View style={Styles.sectionButton}>
                <TouchableOpacity style={Styles.button}>
                    <Text style={Styles.textButton}>More informations</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}