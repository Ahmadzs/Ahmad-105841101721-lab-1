import React from "react";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';

const Header = ({text = "Default Text" }) => {

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
        
        )
    };

    export default Header;