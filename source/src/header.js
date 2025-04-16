import React from "react";
import { View,Text,SafeAreaView } from "react-native";

export default function Header ({header}){
    return(
      <SafeAreaView>
            <Text style={{textAlign:'center'}}>{header}</Text>
            </SafeAreaView>
    )
}