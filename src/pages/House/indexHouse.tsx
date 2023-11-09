import { Image, Text, TouchableOpacity, View, Dimensions, } from 'react-native'
import Styles from './styleHouse'
import house1 from '../../images/house1.png'
import IconFavorite from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
const screenWidth = Dimensions.get('window').width;
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useState } from 'react';
const house =
{
    name: "Casa no Serraville",
    img: house1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 1200000
}


export default function App() {
    const navigation = useNavigation();

    const route = useRoute()
    const { name, imageApresentation, images, description, price } = route.params.house
    const [activeSlide, setActiveSlide] = useState(0);
    const renderItem = ({ item }: { item: string }, index: number) =>
    (
        <View style={Styles.sectionImage}><Image key={index} source={{ uri: item }} style={Styles.image} /></View>
    )

    return (
        <View style={Styles.container}>
            <Carousel
                data={images}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout={'default'}
                style={Styles.sectionImage}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <View style={Styles.pagination}>
                <Pagination
                    dotsLength={images.length}
                    activeDotIndex={activeSlide}
                    containerStyle={{ paddingVertical: 10 }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
            <View style={Styles.dados}>
                <Text style={Styles.title}>{name}</Text>

                <Text style={Styles.price}>R$ {price}</Text>

                <View style={Styles.sectionDescription}>
                    <Text style={Styles.textDescription}>{description}</Text>
                </View>

                <View style={Styles.sectionButton}>
                    <TouchableOpacity style={Styles.button}>
                        <Text style={Styles.textButton}>More informations</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}