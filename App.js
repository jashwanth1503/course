import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FlexLayoutScreen() {
  return (


    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.boxContainer}>
          <Text style={styles.boxtext}>Box1</Text>
        </View>
        <View style={[styles.boxContainer, { backgroundColor: "orange" }]}>
          <Text style={styles.boxtext}>Box2</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.boxContainer,{backgroundColor:"#CACFD2"}]}>
          <Text style={styles.boxtext}>Box3</Text>
        </View>
        <View style={[styles.boxContainer, { backgroundColor: "#3498DB" }]}>
          <Text style={styles.boxtext}>Box4</Text>
        </View>
        <View style={[styles.boxContainer, { backgroundColor: "white" }]}>
          <Text style={styles.boxtext}>Box5</Text>
        </View>
        </View>
      <View style={styles.rowContainer}>
      <View style={[styles.boxContainer, { backgroundColor: "#616A6B" }]}>
          <Text style={styles.boxtext}>Box6</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems:'center'
  },
  boxContainer: {
    backgroundColor: 'yellow',
    height: 50,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:5,
    
  },
  rowContainer: {
    flexDirection: 'row',
    //width:'100%',
    justifyContent:'space-between',
    marginVertical:10
  },
  boxtext: {
    color: 'black'
  }
});

