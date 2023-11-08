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
  button: {
    backgroundColor: "#ABC4AA",
    width: "100%",
    justifyContent: "center",
    height: 60,
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
  buttonLogout: {
    backgroundColor: "#c94c4c",
    width: "100%",
    justifyContent: "center",
    height: 60,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 20,
    flexDirection: "row",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 75,
    marginBottom: 20,
    marginLeft: 25,
  },
  icon: {
    marginTop: "5%",
    width: "95%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logoutContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // Align the items to the right
  },
  logoutIcon: {
    marginTop:-30,
  },
  iconContainer: {
    position: "absolute",
    right: 18,
    top: "62.8%",
  },
  iconContainerconfirm: {
    position: "absolute",
    right: 18,
    top: "79.7%",
  },
});

export default Styles;
