import React from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import Color from "../Constants/Colors";

// import { Container } from './styles';
const Char = props => {
  const char = props.itemData.item;
  
  return (
    <View style={styles.encounterStyle}>
      <Text> {char.charName} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  encounterStyle: {
    flex:1,
    backgroundColor: "#BBB",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginVertical: 2,
    marginHorizontal: 1,
  }
});





export default Char;
