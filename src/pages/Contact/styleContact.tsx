import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9EA2A2",
        fontFamily: "Montserrat_700Bold",
      },
      containerHeader: {
        marginTop: "5%",
        marginBottom: "8%",
        paddingStart: "5%",
        fontFamily: "Montserrat_700Bold",
      },
      message: {
        fontSize: 28,
        color: "#FFFFFF",
        fontFamily: "Montserrat_700Bold",
        alignItems:"center",
        justifyContent:"center"
      },
      containerform: {
        flex: 1,
      },
      label: {
        fontSize: 20,
        marginTop: 28,
        fontFamily: "Montserrat_700Bold",
        color: "#fff",
        marginLeft:"5%"
      },
      input: {
        width: "90%",
        height: 50,
        borderColor: "#FFFFFF",
        borderWidth: 1,
        marginTop: "5%",
        marginBottom: "3%",
        borderRadius: 30,
        padding: 10,
        marginLeft:"5%"
      },
      icon: {
        marginTop: "10%",
        marginLeft:"5%",
        width: "95%",
        alignItems: "center",
        justifyContent: "flex-start"
      },
      button: {
        backgroundColor: "#ABC4AA",
        width: "70%",
        alignSelf:"center",
        justifyContent: "center",
        height: 40,
        paddingVertical: 8,
        alignItems: "center",
        marginTop: 50,
        marginBottom: 30,
        borderRadius: 20,
      },
      buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
      },
})

export default Styles