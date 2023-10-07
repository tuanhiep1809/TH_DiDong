import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
  View,
} from "react-native";
import Screen1 from "../src/Screen/FirstScreen.js";
import Screen1_a from "../src/Screen/Screen1_a.js";
export default function Index({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Text} >
          Vui lòng chọn màn hình cần xem!!!
        </Text>
      </View>
      <View style ={{ flexDirection: 'row',justifyContent: 'space-between'}}> 
      <TouchableOpacity  onPress={() => {
          navigation.navigate('Screen1');
      }}
      style={styles.button}>
        <Text style={{ fontWeight: "bold" }}>Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => {
          navigation.navigate('Screen1_a');
      }}
       style={[styles.button, {  }]}>
        <Text style={{ fontWeight: "bold" }}>Screen 2</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    // justifyContent: 'center',
  },
  Text: {
    marginTop: 30,
    color: "#000000",
    fontWeight: "bold",
    fontSize: 30,
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#E3C000",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
