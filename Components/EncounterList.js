import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Encounter from "./Encounter";

export const EncounterList = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [encounters, setEncounters] = useState([{ key: "1", title: "abc" }, { key: "2", title: "def" }]);

  const goalInpuHandler = (enteredEncounter) => {
    setEnteredGoal(enteredEncounter);
  };

  const pressHandler = encounterData => {
    setEncounters(encounters => {
      return encounters.filter((encounter) => encounter.key !== encounterData.key);
    })
  }

  const addGoalHandler = () => {
    setEncounters(currentEncounters => [...currentEncounters, { key: Math.random().toString(), value: enteredEncounter }])
  }

  return (
    <View style={{flex:1,width:"75%",height:"45%",minHeight:"30%",maxHeight:"50%",paddingVertical:"2.5%"}}>
      <FlatList
        data={encounters}
        style={{ backgroundColor: "#CCC" }}
        contentContainerStyle={{}}
        renderItem={itemData =>
          <Encounter id={itemData.item.key} itemData={itemData} onDelete={pressHandler} />}
      />
    </View>
  );
};

export default EncounterList;
