import React from "react";
import { registerRootComponent } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Item from "./pages/Item";

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => (
  <View style={{ flex: 1, marginTop: 15, }}>
    <NavigationContainer>
      <Navigator initialRouteName="Home" defaultScreenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="Create" component={Create} />
        <Screen name="Item" component={Item} />
      </Navigator>
    </NavigationContainer>
  </View>
);

export default registerRootComponent(App);