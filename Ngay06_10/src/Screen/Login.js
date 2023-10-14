import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import Screen2 from "./Screen2.js";
export default function App({ navigation,route }) {
  
  const [anPass, hienPass] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>LOGIN</Text>
      <View
        style={{
          width: "100%",
          height: "20%",
          justifyContent: "center",
          gap: "10px",
          marginTop: "80px",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            height: "40%",
            borderWidth: 1,
            borderColor: "white",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
         
          
          <TextInput
            placeholder="User Name"
            style={{ width: "80%", height: "100%", fontWeight: "bold" }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            height: "40%",
            borderWidth: 1,
            borderColor: "white",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Image
            source={require("../../assets/lock.png")}
            style={{ width: "30px", height: "30px" }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={anPass ? false : true}
            style={{ width: "70%", height: "100%", fontWeight: "bold" }}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              hienPass(!anPass);
            }}
          >
            {anPass ? (
              <Image
                source={require("../../assets/ios-eye-off-1.png")}
                style={{ width: "30px", height: "30px" }}
              />
            ) : (
              <Image
                source={require("../../assets/eye.png")}
                style={{ width: "30px", height: "30px" }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center", gap: "40px", marginTop: "80px" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen2");
          }}
          style={{
            width: "330px",
            height: "45px",
            backgroundColor: "#060000",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: "25px" }}>
          Forgot your Password?
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBCB00",
  },
  Text: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: "100px",
  },
});
