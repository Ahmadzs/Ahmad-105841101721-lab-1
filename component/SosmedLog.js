import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SosmedLog = ({ text = "Default Text", color = "white", fontSize = 13 }) => {
    return (
        <SafeAreaView>
        <View style={{
            alignItems: 'center',
        }}>
        <Text style={{
            fontWeight: 'bold',
            fontSize: Number (fontSize),
            color: color
            }}>
            {text}
        </Text>
        </View>
        </SafeAreaView>
        )
    }

    export default SosmedLog;