import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9EA2A2",
    padding: 40,
    fontFamily: "Montserrat_700Bold",
  },
  containerHeader: {
    marginTop: "15%",
    marginBottom: "8%",
    paddingStart: "5%",
    fontFamily: "Montserrat_700Bold",
  },
  message: {
    fontSize: 28,
    fontWeight: "normal",
    color: "#FFFFFF",
    fontFamily: "Montserrat_700Bold",
  },
  containerform: {
    flex: 1,
    marginTop: 50,
  },
  label: {
    fontSize: 20,
    marginTop: 28,
    fontFamily: "Montserrat_700Bold",
    color: "#fff",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    marginTop: "5%",
    marginBottom: "3%",
    borderRadius: 30,
    padding: 10,
  },
  welcome: {
    backgroundColor: "#9EA2A2",
    padding: 30,
    fontSize: 30,
  },
  button: {
    backgroundColor: "#ABC4AA",
    width: "100%",
    justifyContent: "center",
    height: 40,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 20,
    alignSelf: "center",
  },
  registerText: {
    color: "#800089",
  },
  icon: {
    marginTop: "5%",
    width: "95%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconContainer: {
    position: "absolute",
    right: 18,
    top: "60.8%",
  },
  iconContainerconfirm: {
    position: "absolute",
    right: 18,
    top: "77.5%",
  },
});

export default Styles;
