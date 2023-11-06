import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  background: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  buttons: {
    width: "80%",
    gap: 20,
    alignItems: "center",
  },
  buttonLogin: {
    width: "95%",
    height: 53,
    backgroundColor: "#ABC4AA",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRegister: {
    width: "95%",
    height: 53,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
  textButton: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 17,
    color: "#FFFFFF",
  },
});

export default Styles;
