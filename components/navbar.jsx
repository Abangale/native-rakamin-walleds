import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import Topup from "../pages/topup";
import Transfer from "../pages/transfer"

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Top Up" component={Topup} />
        <Tab.Screen name="Transfer" component={Transfer} />
      </Tab.Navigator>
  );
}
