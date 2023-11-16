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
export default function Screen01({ navigation, route }) {
  const [tk, setTK] = React.useState("");
  const [MK, setMK] = React.useState("");
  const [found, setFound] = React.useState(false);
  function dangNhap() {
    fetch("https://5vd232-8080.csb.app/accounts")
      .then((response) => response.json())
      .then((data) => {
        const account = data.find((item) => item.email === tk && item.password === MK);
        if (account) {
          navigation.navigate("DisplayNote", { account: account }); 
        } else {
          showMessage({
            message: "Tài khoản hoặc mật khẩu không chính xác!!!",
            type: "info",
            duration: 3000, // Thời gian tồn tại của thông báo, tính bằng millisecond
          });
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Có lỗi xảy ra: ", error);
      });
  }

  return (
    <View style={styles.container}>
      <FlashMessage position="top" />
      <Text style={{ fontSize: 29, fontWeight: "bold", marginTop: 20 }}>
        Well Come to !
      </Text>
      <Text style={{ fontSize: 17, marginTop: 10 }}>
        Take note application.
      </Text>
      <Image
        source={require("../../assets/img/takenote.png")}
        style={{ marginTop: 20, width: "170px", height: "170px" }}
      />
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
          onChangeText={setTK}
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
          onChangeText={setMK}
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
      <View
        style={{ marginVertical: "20px", width: "90%", alignItems: "flex-end" }}
      >
        <TouchableOpacity>
          <Text style={{ color: "blue" }}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          dangNhap();
        }}
        style={{
          backgroundColor: "blue",
          borderRadius: "10px",
          width: "90%",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: "20px" }}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DangKy");
        }}
        style={{
          backgroundColor: "red",
          borderRadius: "10px",
          width: "30%",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginLeft: 230,
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
