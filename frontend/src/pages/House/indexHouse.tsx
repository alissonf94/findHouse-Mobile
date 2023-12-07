import { Image, Text, TouchableOpacity, View, Dimensions } from "react-native";
import Styles from "./styleHouse";
import IconFavorite from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
const screenWidth = Dimensions.get("window").width;
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  const navigation = useNavigation<any>();
  const route: any = useRoute();
  const house = route.params.House;
 
  const [activeSlide, setActiveSlide] = useState(0);
  
  const renderItem = ({ item, index }: any) => (
    <View style={Styles.sectionImage}>
      <Image key={index} source={{ uri: item }} style={Styles.image} />
    </View>
  );

  const [isFavority, setFavority] = useState(false);
  const toggleFavority = () => {
    if (isFavority) {
      /* product.favorite = false */
    }
    setFavority(!isFavority);
  };
  return (
    <View style={Styles.container}>
      <Carousel
        data={house.images}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={"default"}
        style={Styles.sectionImage}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <View style={Styles.pagination}>
        <Pagination
          dotsLength={house.images.length}
          activeDotIndex={activeSlide}
          containerStyle={{ paddingVertical: 10 }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
      <IconFavorite
        onPress={toggleFavority}
        name={isFavority ? "heart-sharp" : "heart-outline"}
        color={"red"}
        size={35}
        style={Styles.icon}
      />

      <Icon
        style={Styles.iconBack}
        name="arrow-back-outline"
        size={30}
        color="#fff"
        onPress={() => navigation.navigate("Houses")}
      />

      <View style={Styles.dados}>
        <Text style={Styles.title}>{house.name}</Text>
        <Text style={Styles.price}>R$ {house.price}</Text>
        <View style={Styles.sectionDescription}>
          <Text style={Styles.textDescription}>{house.description}</Text>
        </View>
        <View style={Styles.sectionButton}>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => navigation.navigate("Contact", {'house': house})}
          >
            <Text style={Styles.textButton}>More informations</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
