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
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function Screen01({ navigation, route }) {
  const [notes, setNotes] = React.useState([]);
  const [deleten, setdeleten] = React.useState("");
  React.useEffect(() => {
    fetch(
      `https://5vd232-8080.csb.app/notes?account_id=${route.params?.account.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Có lỗi xảy ra: ", error);
      });
  }, [
    deleten,
    route.params?.nameNoteAdd,
    route.params?.updateName,
  ]);
  const deleteNote = (id) => {
    fetch(`https://5vd232-8080.csb.app/notes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Xử lý phản hồi từ API sau khi xóa thành công
        setdeleten(id);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra: ", error);
      });
  };
  const [term, setTerm] = React.useState("");
  function changeTime(value) {
    setTerm(value);
    if (value === "all") {
      fetch(
        `https://5vd232-8080.csb.app/notes?account_id=${route.params?.account.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setNotes(data);
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error("Có lỗi xảy ra: ", error);
        });
    } else {
      fetch(
        `https://5vd232-8080.csb.app/notes?term=${value}&account_id=${route.params?.account.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setNotes(data);
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error("Có lỗi xảy ra: ", error);
        });
    }
  }
  const [seachText,setseachText] = React.useState('')
    const filterdata = notes.filter((item) =>
    item.name.toLowerCase().includes(seachText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 29, fontWeight: "bold", marginTop: 20 }}>
        Danh sách notes!!
      </Text>
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
          style={{
            width: "90%",
            height: "45px",
            marginLeft: 4,
            borderRadius: 5,
          }}
          onChangeText={setseachText}
          placeholder="Search..."
        />
        <Image
          source={require("../../assets/img/search.png")}
          style={{
            marginHorizontal: "10px",
            width: "20px",
            height: "20px",
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          height: 41,
          marginTop: 7,
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            changeTime("short");
          }}
          style={{
            width: 80,
            height: 40,
            alignItems: "center",
            borderWidth: 1,
            justifyContent: "center",
            borderRadius: 15,
            backgroundColor: term === "short" ? "#F1B000" : null,
          }}
        >
          <Text>Short time</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            changeTime("long");
          }}
          style={{
            width: 80,
            height: 40,
            alignItems: "center",
            borderWidth: 1,
            justifyContent: "center",
            borderRadius: 15,
            backgroundColor: term === "long" ? "#F1B000" : null,
          }}
        >
          <Text>Long time</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            changeTime("all");
          }}
        >
          <Text
            style={{
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              textDecorationColor: "blue",
            }}
          >
            see all
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "90%",
          height: "60%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={filterdata}
          renderItem={({ item }) => {
            let i = 1;
            return (
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "#BBBBBB",
                  width: 350,
                  height: "50px",
                  borderRadius: 10,
                  margin: 10,
                  flexDirection: "row",
                  borderTopWidth: 4,
                  borderTopColor:
                    item.priority === "hight"
                      ? "red"
                      : item.priority === "low"
                      ? "orange"
                      : "pink",
                }}
              >
                <View
                  style={{
                    gap: 10,
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity>
                    <Image
                      style={{
                        width: "20px",
                        height: "20px",
                        resizeMode: "contain",
                        paddingLeft: 30,
                        marginTop: 5,
                      }}
                      source={require("../../assets/img/Frame (2).png")}
                    />
                  </TouchableOpacity>

                  <Text style={{ fontWeight: "bold", fontSize: 22 }}>
                    {item.name}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <TouchableOpacity
                    onPress={() => {
                      deleteNote(item.id);
                    }}
                    style={{ paddingRight: 20 }}
                  >
                    <AntDesign name="delete" size={18} color="red" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("UpdateNote", {
                        note: item,
                        account: route.params?.account,
                      });
                    }}
                    style={{ paddingRight: 20 }}
                  >
                    <Image
                      style={{
                        width: "20px",
                        height: "20px",
                        resizeMode: "contain",
                      }}
                      source={require("../../assets/img/Frame (3).png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AddNote", { account: route.params?.account });
        }}
        style={{
          backgroundColor: "#00BDD6",
          borderRadius: 100,
          width: 69,
          height: 69,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="add" size={45} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  dsNotes: {
    borderRadius: 8,
    width: 350,
    height: 60,
    margin: 10,
    borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});
