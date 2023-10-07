import { StatusBar } from 'expo-status-bar';
import React,{Component,useState} from 'react';
import { StyleSheet,Image,TextInput,TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Login({navigation}) {
  const[anPass,hienPass] = useState(false)
  return (
    <View style={styles.container}>
        <Text>ádas</Text>
   </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBCB00',
  },
  Text:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: '100px'

  }, 
});


