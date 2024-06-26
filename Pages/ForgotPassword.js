import React from "react";
import { View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/header";
import Kolom from "../component/Kolom";
import SosmedLog from "../component/SosmedLog";
import Tombol from "../component/Tombol";

const ForgotPassword = () => {
    return (
        <SafeAreaView>
            <View>
            <View style={{
                marginTop: 190
            }}>
                <Header text="Forgot Password" />
            </View>

            <View style={{
                marginTop: 100,
                alignItems: 'center'
            }}>
                <Kolom placeholder="Email" borderColor={"grey"} placeholderTextColor={"white"}/>
            </View>

            <View style={{
                marginTop: 10
            }}>
                <SosmedLog text="Silakan masukkan alamat email Anda" fontSize={10}/>
               
            </View>

            <View style={{
                marginTop: 50
            }}>
                <Tombol backgroundColor="blue" text="KIRIM"/>
            </View>
            <View style={{
                marginTop: 10,
            }}>
                <SosmedLog text="Bukan alamat email yang valid. " color= "red" fontSize={10}/>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword;