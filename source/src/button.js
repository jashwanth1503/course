import React from "react";

import { Text,View,StyleSheet } from "react-native";

export default function CustomButton({tittle}) {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{tittle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor:"#324F40",
        height:55,
        justifyContent:'center',
        borderRadius:15
    },
    buttonText : {
        color : "white",
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        letterSpacing:2
    }
})