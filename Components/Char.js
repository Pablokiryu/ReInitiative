import React from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import Color from "../Constants/Colors";

// import { Container } from './styles';
const Char = props => {
  const char = props.itemData.item;

  return (
    <View style={styles.encounterStyle}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "teal" }}>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <View style={{}}>
            <Button title={char.initiative.toString()} />
          </View>
          <View style={{flex:5}}>
            <Text> {char.charName} </Text>
          </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  encounterStyle: {
    flex: 1,
    //backgroundColor: "#BBB",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginVertical: 2,
    marginHorizontal: 1,
    backgroundColor: "black"
  }
});





export default Char;
