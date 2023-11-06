import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import Houses from "../pages/Houses/houses"
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
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Houses"
        component={Houses}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
