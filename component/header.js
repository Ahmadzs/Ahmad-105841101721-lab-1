import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = ({ text }) => {
    return (
        <SafeAreaView>
        <View style={{
            marginBottom: -50,
            alignItems: 'center',
            }}>
            <Text style={{
                color: 'white',
                fontSize: 35,
                fontWeight: 'bold',
            }}>
            {text}
            </Text>
        </View>
        </SafeAreaView>
        )
    };

    export default Header;