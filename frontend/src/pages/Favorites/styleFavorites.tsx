import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ABC4AA",
    width: "100%",
  },
  flat: {
    width: "100%",
    marginTop: 20,
  },
  containerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "93%",
    marginTop: 15,
  },
  text:{
    fontSize:20,
    fontFamily: "Montserrat_700Bold",
    color:"#fff",
    marginLeft:"5%",
  },
  icon:{
    marginTop:"5%",
    marginLeft:"5%",
    width:"95%",
    alignItems:"center",
    justifyContent:"flex-start"
  }
});

export default Styles;
