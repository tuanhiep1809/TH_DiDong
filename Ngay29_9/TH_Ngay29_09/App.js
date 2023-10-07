import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
  View,
} from "react-native";
import Index from "./src/index.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./src/Screen/FirstScreen.js";
import Screen1_a from "./src/Screen/Screen1_a.js";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen1_a" component={Screen1_a} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
