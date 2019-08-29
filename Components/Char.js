import React from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import Color from "../Constants/Colors";
// import { Container } from './styles';
const Char = props => {
  const char = props.itemData.item;

  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: "#aec", marginVertical: 10, elevation: 5, borderRadius: 5, overflow: "hidden" }}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: "green" }}
          onPress={() => { console.log(char.charName + "'s Init Pressed") }}
          delayLongPress={800}
          onLongPress={() => { console.log(char.charName + "'s Init LongPressed") }}>
          <View style={{ flex: 1, backgroundColor: "#CCC", height: 60, justifyContent: "center", alignItems: "center" }}>
            <Text> {char.initiative} </Text>
          </View>
        </TouchableOpacity>

      <TouchableOpacity
        style={{ flex: 9, height: 60, justifyContent: "center", alignItems: "center" }}
        onPress={() => { console.log(char.charName + " Pressed") }}
        delayLongPress={800}
        onLongPress={() => { console.log(char.charName + " LongPressed") }}>
        <View style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}>
          <Text> {char.charName} </Text>
        </View>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  encounterStyle: {
    flex: 1,
    backgroundColor: "#BBB",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    marginVertical: 10,
  }
});





export default Char;
