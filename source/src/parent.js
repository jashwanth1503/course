import React from "react";
import { View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Counter from "./child";
import MyChild from "./myChild";
import LoginScreen from "./login";
import navigationScreens from "./Navigation/navigationScreens";

const Parent = () => {
    return (
        
            <SafeAreaView style={{flex: 1 }} >
               <LoginScreen />
            </SafeAreaView>
       
    )
}

export default Parent