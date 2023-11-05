import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen01 from "./src/Screen01.js";
import Screen02 from "./src/Screen02.js";

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Screen01">
        <stack.Screen
          name="Screen01"
          options={{ headerShown: false }}
          component={Screen01}
        />
        <stack.Screen
          options={({ route }) => ({
            title: "",
            headerRight: () => {
              return (
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 100,
                      resizeMode: "contain",
                    }}
                    source={require("./assets/Rectangle.png")}
                  />
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontWeight: "bold" }}>Hi  </Text>
                      <Text style={{ fontWeight: "bold" }}>
                        {route.params.name}
                      </Text>
                    </View>
                    <Text>
                    Have agrate day a head
                    </Text>
                  </View>
                </View>
              );
            },
          })}
          name="Screen02"
          component={Screen02}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
