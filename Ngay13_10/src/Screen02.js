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
export default function App({navigation}) {
  const [mau, setMau] = useState(require("../assets/vs_blue.png"));
  const [text, setText] = useState();
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "20%",
          flexDirection: "row",
        }}
      >
        <Image
            source={mau}
            style={{ width: "103px", height: "105px", margin: "3px" }}
          />
          <View style={{flexDirection:"column"}}>
          <Text style={{ fontSize: "15px", fontWeight: "bold" }}>
          Điện Thoại Vsmart Joy {"\n"}3 Hàng chính hãng
        </Text>
        {text == "silver" ? (
        <Text style={{ fontSize: "15px", fontWeight: "bold" }}>Màu: silver {"\n"}Cung cấp bởi: Anh Hiệp {"\n"}2.000.000đ</Text>) 
        :text == "red" ? (
          <Text style={{ fontSize: "15px", fontWeight: "bold" }}>Màu: Red {"\n"}Cung cấp bởi: Hiệp haha {"\n"}3.000.000đ</Text>) 
          :text == "black" ? (
            <Text style={{ fontSize: "15px", fontWeight: "bold" }}>Màu: Black {"\n"}Cung cấp bởi: Hiệp Anh {"\n"}3.500.200đ</Text>) 
        :text == "blue"?  (
          <Text style={{ fontSize: "15px", fontWeight: "bold" }}>Màu: Blue {"\n"}Cung cấp bởi: Hiệp haha {"\n"}3.000.000đ</Text>) 
          :null
        }
          </View>
        
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
                setMau(require("../assets/vs_silver.png"));
                setText("silver");
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
                setMau(require("../assets/vs_red.png"));
                setText("red");
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
                setMau(require("../assets/vs_black.png"));
                setText("black");
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
                setMau(require("../assets/vs_blue.png"));
                setText("blue");
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
