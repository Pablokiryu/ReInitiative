import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export  const  EncounterList = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [encounters, setEncounters] = useState(["abc", "defg"]);

  const goalInpuHandler = (enteredEncounter) => {
    setEnteredGoal(enteredEncounter);
  };

  const addGoalHandler = () => {
    setEncounters(currentEncounters => [...currentEncounters, { key: Math.random().toString(), value: enteredEncounter }])
  }

  return (
    <FlatList data={encounters} style={{backgroundColor:"#CCC",width:"80%",height:"50%"}}
      renderItem={itemData =>
        <TouchableOpacity>
        <View style={styles.encounterStyle}>
          <Text style={{flex:1}}>{itemData.item}</Text>
          <Button title="X" style={{width:"40%"}}/>
        </View>   
      </TouchableOpacity> }/>

  );
};

const styles = StyleSheet.create({
  encounterStyle: {
    backgroundColor: "#BBB",
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    marginVertical:2,
    marginHorizontal:1,
  }
});



module.exports = EncounterList;