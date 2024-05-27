import React from "react";
import { View, Text } from 'react-native';

const CustomButton = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 20,
            marginBottom: 30
        }}>
            <View style={{
                backgroundColor: 'green',
                width: 100,
                height: 50,
                marginRight: 10,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>
                    Login
                </Text>
            </View>
            <View style={{
                backgroundColor: 'green',
                width: 100,
                height: 50,
                marginRight: 10,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>
                    Register
                </Text>
            </View>
        </View>
    );
}

export default CustomButton;