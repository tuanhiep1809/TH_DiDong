import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import DangNhap from './src/view/DangNhap.js'
import DisplayNote from './src/view/DisplayNote.js'
import DangKy from './src/view/DangKy.js'
import AddNote from './src/view/AddNote.js'
import UpdateNote from './src/view/UpdateNote.js'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen options={{headerShown:false}} name="DangNhap" component={DangNhap} />
          <Stack.Screen
          options={({ route }) => ({
            title: "",
            headerRight: () => {
              return (
                <View style={{ flexDirection: "row" }}>
                  {/* <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 100,
                      resizeMode: "contain",
                    }}
                    source={require("./assets/Rectangle.png")}
                  /> */}
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontWeight: "bold" }}>
                        {route.params?.account.name}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            },
          })}
          name="DisplayNote" component={DisplayNote} />
          <Stack.Screen name="DangKy" component={DangKy} />
          <Stack.Screen
            options={({ route }) => ({
              title: "",
              headerRight: () => {
                return (
                  <View style={{ flexDirection: "row" }}>
                    {/* <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 100,
                        resizeMode: "contain",
                      }}
                      source={require("./assets/Rectangle.png")}
                    /> */}
                    <View>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontWeight: "bold" }}>
                          {route.params?.account.name}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              },
            })}
          name="AddNote" component={AddNote} />
          <Stack.Screen name="UpdateNote" component={UpdateNote} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
