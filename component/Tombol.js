import React from "react";
import { View, Text } from "react-native";

const Tombol = ({ backgroundColor, text }) => {
  return (
      <View style={{
        backgroundColor: backgroundColor,
        width: 340, 
        height: 50,
        borderRadius: 23,
        marginLeft: 38,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          color: 'white',
          lineHeight: 20,
        }}>
          {text}
        </Text>
      </View>
    )
  };

  export default Tombol;