import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider, useAuth } from "./context/authContext";

import Navbar from "./components/navbar";
import Login from "./pages/login";
import Register from "./pages/register";

const Stack = createStackNavigator();

function AppNavigator() {
  const { user } = useAuth();

  return (
    <Stack.Navigator initialRouteName={user ? "Navbar" : "Login"}>
      {user ? (
        <>
          <Stack.Screen
            name="Navbar"
            component={Navbar}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
