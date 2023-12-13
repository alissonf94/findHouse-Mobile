import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "94%",
    borderRadius: 20,
    marginLeft: "3%",
    padding: "3%",
    marginBottom: "3%",
  },
  containerHouse: {
    width: "37%",
  },
  textHouse: {
    fontSize: 22,
    fontFamily: "Montserrat_300Light",
  },
  textName: {
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",
  },
  icon: {
    flexDirection: "row",
    marginTop: "5%",
  },
  textIcon: {
    marginLeft: "4%",
  },
  button: {
    alignItems: "center",
    width: "50%",
    marginTop: "3%",
    marginLeft: "30%",
    backgroundColor: "black",
    borderRadius: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
});

export default Styles;
