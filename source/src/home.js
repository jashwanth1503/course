import React, { useState } from "react";

import { View, Text, Button,StyleSheet } from "react-native";

const HomeScreen = ({route}) => {
    const {email,password}= route.params
    
    

    // if count is zero decrease and reset both are disabled

    return (
        <View style={styles.container}>
            <Text style={{color:'black',fontSize:25,fontWeight:'bold',textAlign:'center'}}>User Details</Text>
            <View>
            <Text style={styles.text}>email: {email}</Text>
            <Text style={[styles.text]}>password: {password}</Text>
            {/* <Text style={[styles.text,{backgroundColor:'green',color:'red'}]}>age: {age}</Text> */}
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    text :{
        textAlign:'auto',
        fontSize:20,
        //backgroundColor:'#ececea',
        color:"black"
        
    },
    container:{
        //justifyContent:'center',
        flex:1,
        padding:5,
        rowGap:10,
        alignItems:'center'
    }
})

export default HomeScreen;

