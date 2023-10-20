import { StatusBar } from "expo-status-bar";
import React, { Component, useState,useEffect } from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import Screen02 from'./Screen02.js'
export default function App({route, navigation }) {
  const [mau, setMau] = useState(require("../assets/vs_blue.png"));

  useEffect(() => {
  
    if (route.params?.mau) {
      setMau(route.params.mau);
    }
  }, [route.params?.mau]);

  
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "58%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
            source={mau}
            style={{ width: "283px", height: "305px", margin: "3px" }}
          />


       
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Điện Thoại Vsmart Joy 3  - Hàng chính hãng
        </Text>
      </View>
      <View
        style={{
          width: "87%",
          height: "42%",
        }}
      >
        <View
          style={{
            width: "80%",
            height: "45px",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row", 
            }}
          >
            <Image
              source={require("../assets/star.png")}
              style={{ width: "23px", height: "25px", margin: "3px" }}
            />
            <Image
              source={require("../assets/star.png")}
              style={{ width: "23px", height: "25px", margin: "3px" }}
            />
            <Image
              source={require("../assets/star.png")}
              style={{ width: "23px", height: "25px", margin: "3px" }}
            />
            <Image
              source={require("../assets/star.png")}
              style={{ width: "23px", height: "25px", margin: "3px" }}
            />
            <Image
              source={require("../assets/star.png")}
              style={{ width: "23px", height: "25px", margin: "3px" }}
            />
          </View>
          <View >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              (Xem 828 đánh giá)
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row",}}>
          <Text style={{ fontWeight: "bold", fontSize: 19, marginRight:'50px' }}>1.790.000 đ</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, textDecorationLine: 'line-through',opacity: 0.5,}}>1.790.000 đ</Text>
        </View>
        <View style={{ flexDirection: "row",marginTop:'17px'}}>
              <Text style={{ fontWeight: "bold", fontSize: 13,color:'red',marginRight:'5px' }}>
              Ở ĐÂU RẺ HƠN HOÀN TIỀN
              </Text>
              <Image
            source={require("../assets/Group 1.png")}
            style={{ width: "16px", height: "17px" }}
          />
        </View>
        <View style={{borderWidth:1,borderRadius:10,width: '100%',height:'35px',marginTop:'23px'}}>
            <TouchableOpacity  onPress={()=>{
            navigation.navigate('Screen02')
            }

            } style={{flexDirection:'row',alignItems:'center',marginTop:'5px'}}>
                <Text style={{marginRight:'60px',marginLeft:'120px'}}>
                4 MÀU-CHỌN MÀU
                </Text>
                <Image
            source={require("../assets/Vector.png")}
            style={{ width: "11px", height: "12px" }}
          />
            </TouchableOpacity>

        </View>
        <View style={{borderWidth:1,borderRadius:10,width: '100%',height:'43px',backgroundColor:'red',marginTop:'57px'}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginTop:'10px'}}>
                <Text style={{color:'white',fontWeight:'bold'}}>CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
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
