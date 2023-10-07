import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text,Button,TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>    
      <StatusBar Stype />  
      <Image
      source={require("../../assets/Ellipse8.png")}
       style={styles.image}
      />
      <Text style={styles.Text}>
      GROW {'\n'} YOUR BUSINESS
      </Text>
      <Text style={{fontWeight: 'bold', textAlign: 'center',marginTop:62}}>
      We will help you to grow your business using {'\n'} online server
      </Text>
      <View style={{ flexDirection: 'row',justifyContent: 'space-evenly',marginTop: 30}}>
      <TouchableOpacity style={styles.button}>
					<Text style={{fontWeight: 'bold'}}>LOGIN</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button , { marginLeft: 40 }]}>
					<Text style={{fontWeight: 'bold'}}>SIGN UP</Text>
				</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
   marginTop: 100,
    width: 150,
    height: 150
  },
  Text:{
    marginTop: 30,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',

  },
  button: {
		backgroundColor: '#E3C000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
	},
 
});
