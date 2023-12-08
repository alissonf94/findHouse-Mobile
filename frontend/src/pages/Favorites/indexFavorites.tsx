import Icon from "react-native-vector-icons/Ionicons";
import { FavoriteHouse, FavoriteHouses } from "../../Data/FavoriteHouses";
import ItemHouse from "../../components/itemFavoriteHouse/itemFavoriteHouse";
import Menu from "../../components/menu/menu";
import Styles from "./styleFavorites";
import { View, Text, FlatList, ListRenderItemInfo } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import * as UserService from "../../services/userService/UserService"

import { House } from "../../types/RootStackParamList";

export default function App() {
  const [favorites, setFavorites]= useState([])
  
  const findFavorites = async ()=>{
    const reponse = await UserService.getFavorites()

    const result = await reponse.json()

    setFavorites(result)
  }

  useEffect(()=>{
    findFavorites()
  },[favorites])

  function renderItem({ item }: ListRenderItemInfo<House>) {
    return <ItemHouse {...item} />;
  }

 

  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <Icon
        style={Styles.icon}
        name="arrow-back-outline"
        size={30}
        color="#fff"
        onPress={() => navigation.navigate("Houses" as never)}
      />
      <View style={Styles.containerText}>
        <Text style={Styles.text}>Favorites</Text>
      </View>
      <FlatList
        style={Styles.flat}
        renderItem={renderItem}
        data={favorites}
        keyExtractor={(item) => item.name}
      />
      <Menu />
    </View>
  );
}
