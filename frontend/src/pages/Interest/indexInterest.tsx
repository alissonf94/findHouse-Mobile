import Icon from "react-native-vector-icons/Ionicons";
import { Interest, Intereste } from "../../Data/Interest";
import ItemHouse from "../../components/itemInterest/itemInterest";
import Menu from "../../components/menu/menu";
import Styles from "./styleInterest";
import { View, Text, FlatList, ListRenderItemInfo } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  function renderItem({ item }: ListRenderItemInfo<Interest>) {
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
        <Text style={Styles.text}>Interests</Text>
      </View>
      <FlatList
        style={Styles.flat}
        renderItem={renderItem}
        data={Intereste}
        keyExtractor={(item) => item.name}
      />
      <Menu />
    </View>
  );
}
