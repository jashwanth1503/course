import React, { useState } from "react";

import { View,TextInput ,Text,StyleSheet,Button,TouchableOpacity} from "react-native";

import CustomButton from "./button";

export default function LoginScreen ({navigation}) {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmpassword , setConfirmPassword] = useState()
    const [username , setUserName] = useState('')
    return(
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
           Hello! Sign Up to get Started</Text>
            <View style={{rowGap:10}}>
                <TextInput 
                style={styles.textInput}
                placeholder="Name"
                value={username}
                onChangeText={setUserName}
                />
                <TextInput 
                style={styles.textInput}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                />
                <TextInput 
                style={styles.textInput}
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                />
                <TextInput 
                style={styles.textInput}
                placeholder="Confirm Password"
                value={confirmpassword}
                onChangeText={setConfirmPassword}
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton tittle={'Sign Up'} /> 
                <Text style={{textAlign:"center",fontWeight:'bold'}}>Already have account?
        <Text style={{color:'#324F40',fontWeight:'bold'}} onPress={()=>navigation.pop()}> Login</Text></Text>
            </View>
        
      </View>
    )
}

const styles = StyleSheet.create({
   
    container :{
        justifyContent:'center',
        flex:1,
        backgroundColor:'#ececea',
        padding:10,
        marginHorizontal:5,
        gap:10
    },
    welcomeText :{
        fontSize:30,
        fontWeight:'bold',
        bottom:60
    },
    textInput :{
        height:60,
        backgroundColor:'white',
        borderRadius:15,
        padding:15
    },
    buttonContainer : {
        top:30,
        rowGap:10
    }
})