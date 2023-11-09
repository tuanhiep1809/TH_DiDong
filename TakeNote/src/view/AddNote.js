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
  TouchableOpacity,SectionList
} from "react-native";
import * as React from "react";
import FlashMessage, { showMessage } from "react-native-flash-message";
import moment from "moment";

export default function add({ navigation, route }) {
  const datapriority =[
    "low","median","hight"
  ]
  const [selectedPriority, setSelectedPriority] = React.useState('hight');
  const [noteAdd, setNoteAdd] = React.useState("");
  const [clicked, setClicked] = React.useState(false);
  const dataTerm =[
    "short","long"
  ]
  const [selectedTerm, setSelectedTerm] = React.useState('short');
  const [clickedTerm, setClickedTerm] = React.useState(false);
  const AddNote = () => {
    if (noteAdd) {
      fetch("https://5vd232-8080.csb.app/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: noteAdd,
          date: moment().format("YYYY-MM-DD"),
          account_id: route.params?.account.id,
          priority: selectedPriority,
          term: selectedTerm
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Xử lý phản hồi từ API
          navigation.navigate('DisplayNote',{nameN: noteAdd,account:route.params?.account});;
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
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 40 }}>
        Add new note !
      </Text>
      <FlashMessage position="top" />
      <TouchableOpacity
        style={{
          marginTop: 20,
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

          onChangeText={setNoteAdd}
          style={{ width: "100%", height: "45px", borderRadius: "10px" }}
          placeholder="Enter your note "
        />
      </TouchableOpacity>
      {/* dropdow */}
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
          setClickedTerm(!clickedTerm);
        }}>
        <Text style={{fontWeight:'600'}}>
          {selectedTerm}
        </Text>
        {clickedTerm ? (
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
      {clickedTerm ? (
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
            data={dataTerm}
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
                    setSelectedTerm(item);
                    setClickedTerm(!clickedTerm);
                    
                  }}>
                  <Text style={{fontWeight: '600'}}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
       {/* dropdow */}
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
        onPress={AddNote}
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
        <Text style={{ color: "white", fontSize: "20px" }}>Add</Text>
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
