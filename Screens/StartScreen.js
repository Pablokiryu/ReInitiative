import React from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import Color from "../Constants/Colors"
import EncounterList from "../Components/EncounterList"
import InputModal from "../Components/inputModal"

const StartScreen = props => {
  return (
    <View style={{ flex: 1,width:"100%",alignItems:"center"}}>
      <Text style={{ fontSize: 36, fontWeight: "900", color: "teal" }}>Re-iNitiative</Text>
      <EncounterList encounters={props.encountersList} onDeleteEncounter={props.onDeleteEncounter} onPressEncounter={props.onPressEncounter} />
      <Button color={Color.primary} title="Novo Encontro" onPress={props.EnableModal} />
      <InputModal visible={props.isAddMode} onAddEncounter={props.addEncounterHandler} onCancel={props.cancelModalHandler} />
  </View>
  );
}

const styles = StyleSheet.create({
  encounterStyle: {
    backgroundColor: "#BBB",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 2,
    marginHorizontal: 1,
  }
});





export default StartScreen;
