import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
export default function App({ navigation, route }) {
  const job = [
    {
      name: "To check email",
    },
    {
      name: "UI task web page",
    },
    {
      name: "Learn javascript basic",
    },
    {
      name: "Learn HTML Advance",
    },
    {
      name: "Medical App UI",
    },
    {
      name: "Learn Java",
    },
  ];
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          height: 50,
          flexDirection: "row",
          gap: 10,
          marginTop: 30,
        }}
      >
        <Image
          style={{ width: 30, height: 30, resizeMode: "contain" }}
          source={require("../assets/Frame (1).png")}
        />
        <TextInput style={{ width: 250, height: 50 }} placeholder="Search" />
      </TouchableOpacity>
      <FlatList
        data={job}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "#9095A0",
                width: 300,
                height: "50px",
                borderRadius: 10,
                margin: 10,
                flexDirection:'row'
              }}
            >
                <View  style={{
               gap:15,
                flexDirection:'row'
              }}>
                <TouchableOpacity>
                <Image
                style={{
                  width: "20px",
                  height: "20px",
                  resizeMode: "contain",
                  paddingLeft:30
                }}
                source={require('../assets/Frame (2).png')}
              />
                </TouchableOpacity>
                
              <Text style={{fontWeight:'bold'}}>{item.name}</Text>
                </View>
              
              <TouchableOpacity style={{paddingRight:30}}>
                <Image
                  style={{
                    width: "20px",
                    height: "20px",
                    resizeMode: "contain",
                  }}
                  source={require('../assets/Frame (3).png')}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity style={{backgroundColor:'#00BDD6', borderRadius:100,width:69,height:69,justifyContent:'center',alignItems:'center'}}>
        <Text  style={{fontSize:74,color:'white',textAlign:'center',borderWidth:1}}>
            +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    gap:10
  },
  Image: {
    width: 271,
    height: 271,
    resizeMode: "contain",
    marginBottom: 30,
  },
});
