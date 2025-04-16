import React from "react";

import { View,Text } from "react-native";

const MyChild = ({title,count}) => {
    return(
    <View>
        <Text>{title}</Text>
        <Text>{count}</Text>
    </View>
    )
}

export default MyChild;