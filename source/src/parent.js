import React from "react";
import { View,SafeAreaView } from "react-native";

import Counter from "./child";

const Parent = () => {
    return(
    <SafeAreaView style={{backgroundColor:'white',flex:1}} >
    <Counter name={'jashwanth'} company={'Amzon'}/>
    </SafeAreaView>
    )
}

export default Parent