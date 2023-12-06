import Styles from "./styleHouses";
import { FlatList, ListRenderItemInfo, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Menu from "../../components/menu/menu";
import { House, HouseList } from "../../Data/ListHouses";
import ItemHouse from "../../components/itemHouse/itemHouse";
import { FAB } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();
  const openChat = () =>{
     navigation.navigate("Chat" as never)
  }
  function renderItem({ item }: ListRenderItemInfo<House>) {
    return <ItemHouse {...item} />;
  }
  return (
    <View style={Styles.container}>
      <View style={{ display: "flex", flexDirection: "row", width:"100%" }}>
        <TextInput style={Styles.search} />
        <Icon style={Styles.icon} name="search" size={35} color="#675D50" />
      </View>

      <FlatList
        style={Styles.flat}
        renderItem={renderItem}
        data={HouseList}
        keyExtractor={(item) => item.name}
      />
      {/* <FAB style={Styles.fab}
      visible={true}
      icon={{name:'chat',color:'white'}}
      color="green"
      onPress={()=>openChat() }
      /> */}
      <Menu />
    </View>
  );
}
