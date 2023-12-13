import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        width: '94%',
        marginLeft: 10,
        paddingRight: 20,
        borderRadius: 20,
        marginBottom: 40
    },
    image:{
        width: 160,
        height: 140,
        borderRadius: 10
    },
    containerText:{
        flex: 1,
        marginLeft: 16,
    },
    textName: { 
        fontFamily: 'Montserrat_100Thin',
        fontSize: 20,
        marginTop: 3,
        width: 150
    },
    textDescription:{
        fontFamily:'Inter_100Thin',
        fontSize: 12,
        marginTop: 3,
        width: 180
    },
    textPrice: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 15,
        marginTop: 3,
        color: '#404F4C'
    }
});
export default Styles;
