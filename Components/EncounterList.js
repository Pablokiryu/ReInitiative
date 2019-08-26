import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Encounter from "./Encounter";

export const EncounterList = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [encounters, setEncounters] = useState([{ key: "1", value: "abc" }, { key: "2", value: "def" }]);
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
    <FlatList data={encounters} style={{ backgroundColor: "#CCC", width: "80%", height: "50%" }}
      renderItem={itemData =>
        <Encounter id={itemData.item.key} itemData={itemData} onDelete={pressHandler} />}
    />

  );
};

module.exports = EncounterList;