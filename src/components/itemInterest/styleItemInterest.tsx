import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  containe: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    width: "94%",
    height: 150,
    marginLeft: 10,
    paddingRight: 20,
    borderRadius: 20,
    marginBottom: 40,
  },
  imag: {
    width: 160,
    height: 140,
    borderRadius: 10,
    
 
  },
  containerTex: {
    flex: 1,
    marginLeft: 16,
    gap: 2,
    margin: -130
    
  },

  containerTexte: {
    margin: -130,
    marginLeft: 25
  },

  textNam: {
    fontFamily: "Montserrat_100Thin",
    fontSize: 20,
    marginTop: 3,
    width: 150,
    marginLeft: 170,
  },

  textDescription: {
    fontFamily: "Inter_100Thin",
    fontSize: 12,
    marginTop: 3,
    width: 180,
    
  },

  option: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 170,
  },
  butto: {
    borderRadius: 30,
    backgroundColor: "#ABC4AA",
    textAlign: "center",
    width: "38%",
  },

  buttonTex: {
    fontFamily: "Montserrat_700Bold",
    justifyContent: "center",
    marginLeft: 6,
    color: "red",
  
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 170,
  
  },

  clock: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 170,
  },

  textHora: {
    fontFamily: "Roboto_700Bold",
    fontSize: 15,
    marginTop: 3,
    color: "#404F4C",
  },

  textData: {
    fontFamily: "Roboto_700Bold",
    fontSize: 15,
    marginTop: 3,
    color: "#404F4C",

  },
  textLocal: {
    fontSize: 15,

  },
  overlayText: {
   position: 'absolute',
   top: 50,
   fontFamily: "Roboto_700Bold",
   fontSize: 20,   
  },
 
});

export default Styles;