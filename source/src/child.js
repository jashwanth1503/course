import React, { useState } from "react";

import { View, Text, Button } from "react-native";

const Counter = ({ name, company }) => {
    const [count, setCount] = useState(0)
    
    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    // if count is zero decrease and reset both are disabled

    return (
        <View>
            <Text>
                COUNT : {count}
            </Text>
            <Button title="Increase" onPress={() => setCount(count + 1)} />
                
            <View>
                <Button title="Decrease" onPress={handleDecrease} disabled = {count===0} />
                <Button title="Reset" onPress={() => setCount(0)} disabled = {count===0} />
            </View> 
           
        </View>
    )
}

export default Counter;
