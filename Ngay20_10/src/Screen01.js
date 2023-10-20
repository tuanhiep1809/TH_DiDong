import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{marginTop:'30px',width:'97%',height:'87px',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:'24px',fontFamily:'VT323',textAlign:'center',}}>
        A premium online store for {'\n'} sporter and their stylish choice
        </Text>
      </View>
      <View style={{paddingTop:'40px',marginTop:'10px',width:'97%',height:'368px',justifyContent:'center',alignItems:'center',backgroundColor:'#E941411A',borderRadius:50}}>
        <Image source={require('../assets/bifour_-removebg-preview.png')} style={{ width: "263px", height: "265px",  }}/>
      </View>
     <Text style={{marginTop:'15px',lineHeight:'23px',fontSize:'23px',textAlign:'center',fontWeight:700}}>
     POWER BIKE {'\n'}SHOP
     </Text>
     <TouchableOpacity 
     onPress={()=>
    {
        navigation.navigate('Screen02')
    }}
     style={{marginTop:'50px' ,width:'90%',height:'58px',alignItems:'center',justifyContent:'center',backgroundColor:'#E94141',borderRadius:50}}>
      <Text style={{color:'white',lineHeight:'22px',fontSize:'22px',textAlign:'center',}}>
      Get Started
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
});
