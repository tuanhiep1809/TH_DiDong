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
import Screen01 from'./Screen01.js'
export default function App({navigation}) {
  const [mau, setMau] = useState("XanhDam");
  var xanh = "Xanh";
  var Do = "Do";
  var den = "Den";
  var xanhDam = "xanhDam";
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "20%",
          flexDirection: "row",
        }}
      >
        {mau == "XanhDam" ? (
          <Image
            source={require("../assets/vs_blue.png")}
            style={{ width: "103px", height: "105px", margin: "3px" }}
          />
        ) : mau == "Do" ? (
          <Image
            source={require("../assets/vs_red.png")}
            style={{ width: "103px", height: "105px", margin: "3px" }}
          />
        ) : mau == "Den" ? (
          <Image
            source={require("../assets/vs_black.png")}
            style={{ width: "103px", height: "105px", margin: "3px" }}
          />
        ) : (
          <Image
            source={require("../assets/vs_silver.png")}
            style={{ width: "103px", height: "105px", margin: "3px" }}
          />
        )}

        <Text style={{ fontSize: "15px", fontWeight: "bold" }}>
          Điện Thoại Vsmart Joy {"\n"}3 Hàng chính hãng
        </Text>
      </View>
      <View
        style={{ width: "100%", height: "80%", backgroundColor: "#C4C4C4" }}
      >
        <Text style={{ margin: "5px", fontWeight: "bold" }}>
          Chọn một màu bên dưới:
        </Text>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                setMau("Xanh");
              }}
              style={{
                width: "85px",
                height: "80px",
                backgroundColor: "#C5F1FB",
                margin: "6px",
              }}
            ></TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setMau("Do");
              }}
              style={{
                width: "85px",
                height: "80px",
                backgroundColor: "#F30D0D",
                margin: "6px",
              }}
            ></TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setMau("Den");
              }}
              style={{
                width: "85px",
                height: "80px",
                backgroundColor: "#000000",
                margin: "6px",
              }}
            ></TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setMau("XanhDam");
              }}
              style={{
                width: "85px",
                height: "80px",
                backgroundColor: "#234896",
                margin: "6px",
              }}
            ></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate('Screen01',{mau})
        }
        }
          style={{
            height: "50px",
            width: "92%",
            borderRadius: "10px",
            borderBlockColor: "red",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1952E2",
            marginLeft: "19px",
            marginTop: "50px",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 35,
    marginTop: "100px",
  },
});
