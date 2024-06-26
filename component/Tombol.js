import React from "react";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';        


const Tombol = ({backgroundColor, text, placeholder}) => {

    const [fontsLoaded, fontError] = useFonts({
 
        'Medium' : require('../assets/fonts/Metropolis-Medium.otf'),
        'Bold' : require('../assets/fonts/Metropolis-Medium.otf'),
        'Semibold' : require('../assets/fonts/Metropolis-Medium.otf'),
        'Black' : require('../assets/fonts/Metropolis-Medium.otf'),
        
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