import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '96%',
    height: 100, // Set a predefined height here
    borderRadius: 20,
    marginLeft: '2%',
    padding: '3%',
    marginBottom: '3%',
  },
  containerHouse: {
    flex: 1,
    maxWidth: '40%',
  },
  containerBroker: {
    flex: 1,
    maxWidth: '50%',
  },
  textHouse: {
    fontSize: 18,
    fontFamily: 'Montserrat_300Light',
  },
  textName: {
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular',
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
  deleteButton: {
    position: 'absolute',
    color: "#fff",
    bottom: 5,
    right: 5,
    borderRadius: 50,
    padding: 10,
  },
  iconDelete: {
    color: "red",
  },
});

export default Styles;
