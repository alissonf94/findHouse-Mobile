import Styles from "./styleHouses"
import { FlatList, ListRenderItemInfo, TextInput, View } from "react-native"
import  Icon  from "react-native-vector-icons/EvilIcons"
import Menu from '../../components/menu/menu'
import {House, HouseList} from '../../Data/ListHouses'
import ItemHouse from "../../components/itemHouse/itemHouse"
import { SeparatorItem } from "../../components/SeparatorItem/separatorItem"
export default function App (){
   function renderItem ({item}: ListRenderItemInfo<House>){
    return <ItemHouse {...item}/>;
   }
    return (
        <View  style = {Styles.container}>
            <TextInput style={Styles.search}> <Icon name="search" size={20} color='#675D50'/></TextInput>
            <FlatList
                style = {Styles.flat}
                renderItem={renderItem}
                data={HouseList}
                keyExtractor={(item) => item.name}
             />
            <Menu/>
        </View>
    )
}