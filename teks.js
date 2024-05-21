import React from "react";
import { View, Text } from 'react-native';

const test = () => {
  return (
    <View style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Text style={{
            color: 'grey',
            fontSize: 24,
            fontWeight: 'bold',
            margin: 50,
        }}>
            SELAMAT DATANG
        </Text> 
    </View>
  );
}

export default test;