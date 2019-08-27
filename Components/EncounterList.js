import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Encounter from "./Encounter";

export const EncounterList = props => {

  
  const pressHandler = encounterData => {
    props.onDeleteEncounter(encounterData);
  }

  const addGoalHandler = () => {
    setEncounters(currentEncounters => [...currentEncounters, { key: Math.random().toString(), title: enteredEncounter }])
  }

  return (
    <View style={{ flex: 1, width: "80%", height: "60%", minHeight: "30%", maxHeight: "75%", paddingVertical: "2.5%" }}>
      <FlatList
        data={props.encounters}
        style={{ backgroundColor: "#CCC" }}
        contentContainerStyle={{flexGrow:1}}
        renderItem={itemData =>
          <Encounter id={itemData.item.key} itemData={itemData} onDelete={pressHandler} onPressEncounter={props.onPressEncounter} />}
      />
    </View>
  );
};

export default EncounterList;
