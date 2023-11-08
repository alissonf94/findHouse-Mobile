import Styles from "./styleHouses";
import { FlatList, ListRenderItemInfo, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Menu from "../../components/menu/menu";
import { House, HouseList } from "../../Data/ListHouses";
import ItemHouse from "../../components/itemHouse/itemHouse";

export default function App() {
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
      <Menu />
    </View>
  );
}
