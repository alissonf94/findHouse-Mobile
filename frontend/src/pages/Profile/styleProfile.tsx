import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9EA2A2",
    padding: 20,
    justifyContent: "space-between",
  },
  background: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  containerHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontFamily: "Montserrat_700Bold",
  },
  containerform: {
    flexGrow: 1,
    width: "100%",
  },
  label: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    color: "#fff",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    marginTop: "5%",
    marginBottom: "10%",
    borderRadius: 30,
    padding: 10,
  },
  button2: {
    backgroundColor: "#6D7D6D",
    width: "65%",
    justifyContent: "center",
    height: 40,
    alignItems: "center",
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#ABC4AA",
    width: "100%",
    justifyContent: "center",
    height: 55,
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 75,
    margin:"3%"
  },
  logoutContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10%",
  },
  iconContainer: {
    position: "absolute",
    right: 18,
    top: "61.5%",
  },
});

export default Styles;
