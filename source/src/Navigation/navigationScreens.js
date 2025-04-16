import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../login";
import SignUpScreen from "../signUp";
import HomeScreen from "../home";
import header from "../header";
import Header from "../header";

const Stack = createNativeStackNavigator();

export default  function navigationScreens () {
   
    return(
        <NavigationContainer>
           
            <Stack.Navigator>
            <Stack.Screen name = 'LoginScreen' options={{header: () => <Header header={'Login'}/>}}component={LoginScreen}/>
            <Stack.Screen name = 'SignUpScreen'  component={SignUpScreen}/>
            <Stack.Screen name = 'HomeScreen'   component={HomeScreen}/>
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}