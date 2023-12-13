import Icon from "react-native-vector-icons/Ionicons";
import ItemHouse from "../../components/itemInterest/itemInterest";
import Menu from "../../components/menu/menu";
import Styles from "./styleInterest";
import { View, Text, FlatList, ListRenderItemInfo } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Interest } from "../../types/RootStackParamList"
import { useEffect, useState } from "react";
import * as UserService from "../../services/userService/UserService"

export default function App() {
  const navigation = useNavigation();
  
  const [interest, setInterest] = useState([])

  const getInterest = async ()=>{
    const response = await UserService.getInterest();
    const interests = await response.json()
    setInterest(interests)
  }

  useEffect(()=>{
    getInterest()
  })

  function renderItem({ item }:ListRenderItemInfo<Interest>) {

    return <ItemHouse {...item} />;
  }
 
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
        <Text style={Styles.text}>Interests</Text>
      </View>
      <FlatList
        style={Styles.flat}
        renderItem={renderItem}
        data={interest}
        keyExtractor={(item) => item._id}
      />
      <Menu />
    </View>
  );
}
