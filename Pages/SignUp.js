import React from "react";
import {View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Kolom from "../component/Kolom";
import Icon from "../component/Icon";
import Header from "../component/header";
import SosmedLog from "../component/SosmedLog";
import Tombol from "../component/Tombol";

const SignUp = () => {
  const navigation = useNavigation();
  return (
      <View>
      <View
        style={{
          marginTop: 190,
          alignItems: "center",
        }}
      >
        <Header text="Sign up" />
      </View>

      <View
        style={{
          marginTop: 100,
        }}
      >
        <Kolom
          placeholder="Name"
          borderColor={"grey"}
          placeholderTextColor={"white"}
        />
        <Kolom
          placeholder="Email"
          borderColor={"grey"}
          placeholderTextColor={"white"}
        />
        <Kolom
          placeholder="Password"
          borderColor={"grey"}
          placeholderTextColor={"white"}
        />
      </View>

      <View style={{
                marginLeft: 150,
                marginTop: 10
            }}>
                 <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <SosmedLog text="Sudah Memiliki Akun?" />
                </TouchableOpacity>
            </View>


      <View
        style={{
          marginTop: 30,
        }}
      >
        <Tombol backgroundColor="blue" text="DAFTAR" />
      </View>

      <View
        style={{
          marginTop: 90,
          alignItems: "center",
        }}
      >
        <SosmedLog text="------------------- ATAU MASUK DENGAN ------------------" />
      </View>

      <View
        style={{
          marginTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <Icon ImageSource={require("../assets/google.png")} />
          <Icon ImageSource={require("../assets/facebook.png")} />
        </View>
      </View>
    </View>
  );
};

export default SignUp;
