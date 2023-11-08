import Icon from "react-native-vector-icons/Ionicons";
import { FavoriteHouse, FavoriteHouses } from "../../Data/FavoriteHouses";
import ItemHouse from "../../components/itemFavoriteHouse/itemFavoriteHouse";
import Menu from "../../components/menu/menu";
import Styles from "./styleFavorites";
import { View, Text, FlatList, ListRenderItemInfo } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  function renderItem({ item }: ListRenderItemInfo<FavoriteHouse>) {
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
        <Text style={Styles.clear}>Clear all</Text>
      </View>
      <FlatList
        style={Styles.flat}
        renderItem={renderItem}
        data={FavoriteHouses}
        keyExtractor={(item) => item.name}
      />
      <Menu />
    </View>
  );
}
