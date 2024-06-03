import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Kolom from "./component/Kolom";
import Icon from "./component/Icon";
import Header from "./component/header";
import SosmedLog from "./component/SosmedLog";
import Tombol from "./component/Tombol";

const SignUp = () => {
    return (
        <SafeAreaView>
            <View style={{
                marginTop: 190,
                alignItems: 'center',
            }}>
                <Header text="Sign up" />
            </View>

            <View style={{
                marginTop: 100
            }}>
                <Kolom placeholder="Name" borderColor={"grey"} placeholderTextColor={"white"}/>
                <Kolom placeholder="Email" borderColor={"grey"} placeholderTextColor={"white"}/>
                <Kolom placeholder="Password" borderColor={"grey"} placeholderTextColor={"white"}/>
            </View>

            <View style={{
                marginTop: 10,

            }}>
                <SosmedLog text="Sudah Memiliki Akun?"/>
            </View>

            <View style={{
                marginTop: 30
            }}>
                <Tombol backgroundColor="blue" text="DAFTAR"/>
            </View>

            <View style={{
                marginTop: 90,
                alignItems: 'center'
            }}>
                < SosmedLog text="------------------- ATAU MASUK DENGAN ------------------"/>
            </View>

            <View style={{
                marginTop: 40
            }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 20
            }}>
                <Icon ImageSource={require('./assets/google.png')}/>
                <Icon ImageSource={require('./assets/facebook.png')}/>
            </View>
            </View>
        </SafeAreaView>
    )
};

export default SignUp;