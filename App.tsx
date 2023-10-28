import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/main/index'
import {Montserrat_700Bold, useFonts  } from "@expo-google-fonts/montserrat";

export default function App() {
  let [fonsLoad, fontsErro] = useFonts({
    Montserrat_700Bold,
})

if(!fontsErro && !fonsLoad){
  return null
}
  return (
    <View style={styles.container}>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
