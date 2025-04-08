import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FlexLayoutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box3}>
        <Text>Box 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', 
    justifyContent: 'space-around',
    alignItems: 'center', 
    flex:1, 
  },
  box1: {
    backgroundColor: '#008080',
    padding: 20,
    height:100,
    width:'80%',
    alignItems:'center',
    shadowColor: 'black',
    shadowOffset:{width:2,height:4},
    shadowOpacity:0.5,
    borderRadius:4,
    justifyContent:'center',
    elevation:5
    
  },
  box2: {
    backgroundColor: '#5F6A6A',
    padding: 20,
    height:100,
    width:'80%',
    alignItems:'center',
    hadowColor: 'black',
    shadowOffset:{width:2,height:4},
    shadowOpacity:0.5,
    borderRadius:4,
    justifyContent:'center',
    elevation:5
  },
  box3: {
    backgroundColor: '#D7DBDD',
    padding: 20,
    height:100,
    width:'80%',
    alignItems:'center',
    hadowColor: 'black',
    shadowOffset:{width:2,height:4},
    shadowOpacity:0.5,
    borderRadius:4,
    justifyContent:'center',
    elevation:5
  },
});
