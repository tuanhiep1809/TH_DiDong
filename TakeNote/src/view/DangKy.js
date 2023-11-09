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
import { Ionicons } from "@expo/vector-icons";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function Screen01({ navigation }) {
  const [tk, setTK] = React.useState("");
  const [MK, setMK] = React.useState("");
  const [name, setName] = React.useState("");
  const registerAccount = () => {
    if (tk && MK) {
      fetch("https://5vd232-8080.csb.app/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: tk, password: MK, name: name }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Xử lý phản hồi từ API
          navigation.navigate("DangNhap", { tk });
        })
        .catch((error) => {
          console.error("Có lỗi xảy ra: ", error);
        });
    } else {
      console.log("erro");
    }
  };
  return (
    <View style={styles.container}>
      <FlashMessage position="top" />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
        Đăng ký tài khoản Take Note !
      </Text>
      <Image
        source={require("../../assets/img/takenote.png")}
        style={{ marginTop: 20, width: "170px", height: "170px" }}
      />
      <TouchableOpacity
        style={{
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
          onChangeText={(text) => setName(text)}
          value={name}
          style={{ width: "90%", height: "45px" }}
          placeholder="Enter your name"
        />
      </TouchableOpacity>
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
        <Image
          source={require("../../assets/img/Vector.png")}
          style={{
            marginHorizontal: "10px",
            width: "20px",
            height: "20px",
            resizeMode: "contain",
          }}
        />
        <TextInput
          onChangeText={(text) => setTK(text)}
          value={tk}
          style={{ width: "90%", height: "45px" }}
          placeholder="Enter your email address"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: "10px",
          width: "90%",
          height: "45px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../../assets/img/lock.png")}
          style={{
            marginHorizontal: "5px",
            width: "20px",
            height: "20px",
            resizeMode: "contain",
          }}
        />
        <TextInput
          onChangeText={(text) => setMK(text)}
          value={MK}
          style={{ width: "80%", height: "45px" }}
          placeholder="Enter your password"
        />
        <TouchableOpacity>
          <Image
            source={require("../../assets/img/eye.png")}
            style={{ width: "20px", height: "20px" }}
          />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={registerAccount}
        style={{
          backgroundColor: "blue",
          borderRadius: "10px",
          width: "90%",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ color: "white", fontSize: "20px" }}>Register</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          width: "80%",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "40%", height: 1, borderWidth: 1 }}></View>
        <Text style={{ marginHorizontal: 7, fontSize: 19 }}>or</Text>
        <View style={{ width: "40%", height: 1, borderWidth: 1 }}></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "50%",
          height: 45,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../../assets/img/google.png")}
            style={{
              margin: 5,
              width: "40px",
              height: "40px",
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/img/face.png")}
            style={{
              margin: 5,
              width: "40px",
              height: "40px",
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/img/apple.png")}
            style={{
              margin: 5,
              width: "40px",
              height: "40px",
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      </View>
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
