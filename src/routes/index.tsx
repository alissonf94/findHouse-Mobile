import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome/indexWelcome";
import SignIn from "../pages/SignIn/indexSignIn";
import Register from "../pages/Register/indexRegister";
import Houses from "../pages/Houses/indexHouses";
import Favorites from "../pages/Favorites/indexFavorites";
import Profile from "../pages/Profile/indexProfile";
import House from '../pages/House/indexHouse'
import Contact from "../pages/Contact/indexContact";
// stack e uma dependencia de navegacao que e necessario instalar na sua maquina
const Stack = createNativeStackNavigator();

// rotas para nevegacao entre paginas

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false, }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Houses"
        component={Houses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="House"
      component={House}
      options={{ headerShown: false }}
       />
      <Stack.Screen name="Contact"
      component={Contact}
      options={{ headerShown: false }}
       />
    </Stack.Navigator>
  );
}
