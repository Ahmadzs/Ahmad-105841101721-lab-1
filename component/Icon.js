import React from "react";
import { View, StyleSheet, Image } from "react-native";

const Icon = ({ ImageSource}) => {
    return (
       
        <View style={styles.container}>
            <Image source={ImageSource} style={styles.image}/>
        </View>
        
    );
}

    const styles = StyleSheet.create({
        container: {
            width: 80,
            height: 60,
            marginTop: -20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 24,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 5,
        },

        image: {
            width: 30,
            height: 30,
        }
    });

    export default Icon;