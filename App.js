import React from "react";
import { SafeAreaView, View, Image } from "react-native";
import CustomButton from "./Button";
import Teks from "./teks";

export default function App() {
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Teks />
          <Image
            source={require('./assets/green.jpeg')}
            style={{ width: 200, height: 200, marginVertical: 60 }} />
          <CustomButton />
        </View>
      </SafeAreaView>
  );
}