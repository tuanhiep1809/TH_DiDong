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
import{Ionicons} from '@expo/vector-icons'
export default function App({ navigation, route }) {
    
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24,fontWeight:'bold',marginTop:40}}>
        ADD YOUR JOB
      </Text>
      <TouchableOpacity style={{borderWidth:1, borderRadius:5, alignItems:'center',justifyContent:'center',width:320,height:40,flexDirection:'row',gap:10,marginTop:30}}>
    <Image style={{width:30,height:30,resizeMode:'contain'}} source={require('../assets/Frame (4).png')}/>
    <TextInput style={{width:270,height:40,}}  placeholder='input your job'/>
    </TouchableOpacity>
    <TouchableOpacity
       onPress={()=>{
      
      }}
      style={{backgroundColor:'#00BDD6', borderRadius:10,width:220,height:39,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>
            FINISH -
        </Text>
      </TouchableOpacity>
      <Image style={styles.Image} source={require('../assets/Image 95.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    gap:40
  },
  Image: {
    width: 271,
    height: 271,
    resizeMode: "contain",
    marginBottom: 30,
  }, Image:{
    width: 190,
    height:170,
    resizeMode:'contain',
    marginTop: 10
  }
});
