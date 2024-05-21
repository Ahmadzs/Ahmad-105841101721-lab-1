import React from "react";
import { View, Text } from "react-native";

const teks = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <View style={{ margin: 50 }}>
      <Text style={{ color: 'grey', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
        WELCOME
      </Text>
      <Text style={{ color: 'grey', fontSize: 24, fontWeight: 'bold' }}>
        GREENCYCLE
      </Text>
    </View>
    </View>
  );
};

export default teks;
