import React from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import Color from "../Constants/Colors"
import CharList from "../Components/CharList"

const EncounterScreen = props => {
  return (
    <View style={styles.screen}>
        <Text style={styles.title}>{props.encounter.title}</Text>
        <CharList encounter={props.encounter} />
        <Button title= "Back" onPress={props.onPressBack}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width:"90%",
    alignItems: "center"
  },title:{
    fontSize:30,
    fontWeight:"bold"
  }
});





export default EncounterScreen;
