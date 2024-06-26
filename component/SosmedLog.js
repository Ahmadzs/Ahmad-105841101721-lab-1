import React from "react";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';


const SosmedLog = ({ text, color = "black", fontSize = 13 }) => {

    const [fontsLoaded, fontError] = useFonts({
        'Bold': require('../assets/fonts/Metropolis-Bold.otf'),
        'Medium' : require('../assets/fonts/Metropolis-Medium.otf'),
      });
          if (!fontsLoaded) {
            return (
          <View>
              <Text>Font tidak ditemukan !</Text>
          </View>
        );
    }
    
    return (
    
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
        )
    }

    export default SosmedLog;