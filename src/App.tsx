import { registerRootComponent } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => (
  <View style={{ flex: 1, marginTop: 15, }}>
    <NavigationContainer>
      <Navigator defaultScreenOptions={{ headerShown: false }}>
        
      </Navigator>
    </NavigationContainer>
  </View>
);

export default registerRootComponent(App);




