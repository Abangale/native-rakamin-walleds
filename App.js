import Form from "./Form";
import Home from "./pages/Home";
import Topup from "./Topup";
import Transfer from "./Transfer";
import Login from "./Login";
import Register from "./Register";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="Topup" component={Topup} options={{headerShown: false}} />
        <Stack.Screen name="Transfer" component={Transfer} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
