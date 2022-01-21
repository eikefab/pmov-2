//Libraries
import React from "react";
import { registerRootComponent } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Home from "./pages/Home";
import Create from "./pages/Create";
import Item from "./pages/Item";

//Navigation
const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default registerRootComponent(App);