import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Kolom = ({ placeholder, borderColor, placeholderTextColor }) => {
    return (
        <View style={styles.container}>
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={[styles.input, {borderColor}]}/>
        </View>
    )
};

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            marginTop: 20,
        },

        input: {
            width: 340,
            height: 60,
            borderRadius: 15,
            borderWidth: 2,
            paddingHorizontal: 6,
            backgroundColor: 'grey',
        },

        text: {
            fontSize: 14,
        }
    });

    export default Kolom;