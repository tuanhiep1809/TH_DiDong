import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import FlashMessage, { showMessage } from "react-native-flash-message";
import moment from "moment";
export default function add({ navigation,route}) {
  const [nameNew, setNameNew]= React.useState('')
  const datapriority =[
    "low","median","hight"
  ]
  const [selectedPriority, setSelectedPriority] = React.useState('hight');
  const [clicked, setClicked] = React.useState(false);
  const updateNote = () => {
    if (nameNew) {
      fetch(`https://5vd232-8080.csb.app/notes/${route.params.note.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameNew,
          date_Update: moment().format("YYYY-MM-DD"),
          priority: selectedPriority
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Xử lý phản hồi từ API
          navigation.navigate("DisplayNote",{updateName:nameNew,
            account:route.params?.account})
        })
        .catch((error) => {
          console.error("Có lỗi xảy ra: ", error);
        });
    } else {
      showMessage({
        message: "Vui lòng nhập nội dung note!!!",
        type: "info",
        duration: 3000, // Thời gian tồn tại của thông báo, tính bằng millisecond
      });
      console.log("a");
    }}
    
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 40 }}>
        Update note !
      </Text>
      <TouchableOpacity
        style={{
          margin: 20,
          borderWidth: 1,
          borderRadius: "10px",
          width: "90%",
          height: "45px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TextInput
          onChangeText={setNameNew}
          style={{ width: "100%",  borderRadius: "10px", height: "45px" }}
          placeholder={route.params?.note.name}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderRadius: 10,
          borderWidth: 0.5,
          alignSelf: 'center',
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
        }}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{fontWeight:'600'}}>
          {selectedPriority}
        </Text>
        {clicked ? (
          <Image
            source={require('../../assets/img/upload.png')}
            style={{width: 20, height: 20}}
          />
        ) : (
          <Image
            source={require('../../assets/img/dropdown.png')}
            style={{width: 20, height: 20}}
          />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            height: 300,
            alignSelf: 'center',
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <FlatList
            data={datapriority}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#8e8e8e',
                  }}
                  onPress={() => {
                    setSelectedPriority(item);
                    setClicked(!clicked);
                    
                  }}>
                  <Text style={{fontWeight: '600'}}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
      <TouchableOpacity
        onPress={updateNote}
        style={{
          backgroundColor: "blue",
          borderRadius: "10px",
          width: "30%",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: "20px" }}>Update</Text>
      </TouchableOpacity>
      <Image
        source={require("../../assets/img/takenote.png")}
        style={{ marginTop: 30, width: "170px", height: "170px" }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
