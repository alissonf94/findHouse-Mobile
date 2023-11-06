import { FavoriteHouse, FavoriteHouses } from "../../Data/FavoriteHouses";
import ItemHouse from "../../components/itemFavoriteHouse/itemFavoriteHouse";
import Menu from "../../components/menu/menu";
import Styles from "./styleFavorites";
import { View, Text, FlatList, ListRenderItemInfo } from "react-native";

export default function App() {
  function renderItem({ item }: ListRenderItemInfo<FavoriteHouse>) {
    return <ItemHouse {...item} />;
  }
  return (
    <View style={Styles.container}>
      <View style={Styles.text}>
        <Text>Favorites</Text>
        <Text>Clear all</Text>
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
