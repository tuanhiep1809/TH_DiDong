import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';

export default function App({navigation}) {
  const [name,setName] = useState('')
  return (
   <View style ={styles.container}>
    <Image style={styles.Image} source={require('../assets/Image 95.png')}/>
    <Text style={{color: '#8353E2', textAlign:'center', fontSize:24, lineHeight:36,fontWeight:700,}}>
        MANAGE YOUR {'\n'} TASK 
    </Text>
    <TouchableOpacity style={{borderWidth:1, borderRadius:15, alignItems:'center',justifyContent:'center',width:300,height:50,flexDirection:'row',gap:10,marginTop:30}}>
    <Image style={{width:30,height:30,resizeMode:'contain'}} source={require('../assets/Frame.png')}/>
    <TextInput style={{width:250,height:50,}} onChangeText={setName} placeholder='Enter your name'/>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate('Screen02',{name})
    }}
    style={{marginTop:30, backgroundColor:'#00BDD6', borderRadius:15, alignItems:'center',justifyContent:'center',width:200,height:50,flexDirection:'row',gap:10,marginTop:30}}>
    <Text style={{color: 'white', textAlign:'center', fontSize:19, lineHeight:36,}}>
    GET STARTED -
    </Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
  Image:{
    width: 271,
    height:271,
    resizeMode:'contain',
    marginBottom: 30
  }
});
