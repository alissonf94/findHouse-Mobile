import Styles from "./styleHouses";
import { FlatList, ListRenderItemInfo, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Menu from "../../components/menu/menu";
import ItemHouse from "../../components/itemHouse/itemHouse";
import { FAB } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import * as ImmobileService from "../../services/immobileService/immobileService"
import React, { useState } from "react";
import { House } from "../../types/RootStackParamList";

export default function App() {

  const navigation = useNavigation();
  const [houses, setHouses] = useState<House[]>([]) 
  const [search, setSearch] = useState("")
 
  const getHouses = async ()=>{
    const response = await ImmobileService.findAllImmobiles()
    const housesResult:House[] = await response.json()
   
    if(search.trim() !==""){
      let dataFilter=  housesResult.filter(house => house.name.toLowerCase().split(" ").includes(search.trim().toLowerCase()))

      setHouses(dataFilter)
    }
    else{
      setHouses(housesResult)
    }
  }

  const openChat = () =>{
     navigation.navigate("Chat" as never)
  }
  
  function renderItem({ item }: ListRenderItemInfo<House>) {
    return <ItemHouse {...item} />;
  }

  React.useEffect(()=> {
    getHouses()
  },[search])
  
  return (
    <View style={Styles.container}>
      <View style={{ display: "flex", flexDirection: "row", width:"100%" }}>
        <TextInput style={Styles.search} value= {search} onChangeText={(value)=> setSearch(value)} />
        <Icon style={Styles.icon} name="search" size={35} color="#675D50" />
      </View>

      <FlatList
        style={Styles.flat}
        renderItem={renderItem}
        data={houses}
        keyExtractor={(item) => item.name}
      />
       <FAB style={Styles.fab}
      visible={true}
      icon={{name:'chat',color:'white'}}
      color="green"
      onPress={()=>openChat() }
      /> 
      <Menu />
    </View>
  );
}
