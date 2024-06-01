import React from "react";
import { View } from "react-native";
import Header from "./component/header";
import Tombol from "./component/Tombol";
import Icon from "./component/Icon";
import SosmedLog from "./component/SosmedLog";
import Kolom from "./component/Kolom";

const Login = () => {
    return (
        
        <View>
            <View style={{
                marginTop: 190,
                alignItems: 'center',
            }}>
                <Header text="Login" />
            </View>

            <View style={{
                marginTop: 100
            }}>
                <Kolom placeholder="Email" borderColor={"grey"} placeholderTextColor={"white"}/>
                <Kolom placeholder="Password" borderColor={"grey"} placeholderTextColor={"white"}/>
            </View>

            <View style={{
                marginTop: 10,
            }}>
                <SosmedLog text="Lupa Password Anda? Dapatkan Bantuan Untuk Login."/>
            </View>

            <View style={{
                marginTop: 50
            }}>
                <Tombol backgroundColor="blue" text="Masuk"/>
            </View>

            <View style={{
                marginTop: 100,
                alignItems: 'center'
            }}>
                <SosmedLog text="------------------- ATAU MASUK DENGAN ------------------"/>
            </View>

            <View style={{
                marginTop: 20
            }}>
            <View style={{
                gap: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20
            }}>
                <Icon ImageSource={require('./assets/google.png')}/>
                <Icon ImageSource={require('./assets/facebook.png')}/>
            </View>
            </View>
            </View>
    )
}

export default Login;