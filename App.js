
import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import StartScreen from "./Screens/StartScreen"
import EncounterScreen from "./Screens/EncounterScreen"
export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [encountersList, setEncounters] = useState([{
    key: "0", title: "Mesa Mago", personagens: [
      { key: "0", charName: "Azis", initiative: 1, maxHealth: 10, currHealth: 5 },
      { key: "1", charName: "Hiro", initiative: 5, maxHealth: 8, currHealth: 3 },
      { key: "2", charName: "Hiro", initiative: 5, maxHealth: 8, currHealth: 3 },
      { key: "3", charName: "Hiro", initiative: 5, maxHealth: 8, currHealth: 3 },
      { key: "4", charName: "Hiro", initiative: 5, maxHealth: 8, currHealth: 3 },
      { key: "5", charName: "Hiro", initiative: 5, maxHealth: 8, currHealth: 3 },
      { key: "6", charName: "Hiro", initiative: 5, maxHealth: 8, currHealth: 3 },
      { key: "7", charName: "Hiro", initiative: 5, maxHealth: 8, currHealth: 3 },
      { key: "8", charName: "Hiro", initiative: 5, maxHealth: 8, currHealth: 3 },
      { key: "9", charName: "Hiro", initiative: 5, maxHealth: 8, currHealth: 3 },
      { key: "10", charName: "Hiro", initiative: 5, maxHealth: 8, currHealth: 3 },
      { key: "11", charName: "Hiro", initiative: 5, maxHealth: 8, currHealth: 3 },
      { key: "12", charName: "Hiro", initiative: 5, maxHealth: 8, currHealth: 3 }]
  },
  { key: "1", title: "Lobisomen", personagens: [] },
  { key: "2", title: "Kobolds", personagens: [] },
  { key: "3", title: "Demongorgon", personagens: [] },
  { key: "4", title: "Oni", personagens: [] },
  { key: "5", title: "Scorpion Shugenja", personagens: [] },
  { key: "6", title: "Exarch", personagens: [] },
  { key: "7", title: "Godzilla", personagens: [] },
  { key: "8", title: "Twin Black Dragons", personagens: [] },
  { key: "9", title: "Evil Wizard", personagens: [] },
  { key: "10", title: "MindFlayer", personagens: [] },
  { key: "11", title: "Bicho Papao", personagens: [] },
  { key: "12", title: "Goblins", personagens: [] },
  { key: "13", title: "Giant Bee", personagens: [] },
  { key: "14", title: "Tarrask", personagens: [] },
  { key: "15", title: "Cthulhu", personagens: [] },
  ]);
  const [selectedEncounter, setSelectedEncounter] = useState({});
  const [selectedScreen, setSelectedScreen] = useState("StartScreen");
  const addEncounterHandler = newTitle => {

    setEncounters(encountersList => [...encountersList, { key: encountersList.length.toString() + Math.random().toString(), title: newTitle, personagens: [] }])
    setIsAddMode(false);
  }
  const onDeleteEncounter = encounterToDelete => {
    setEncounters(encounters => {
      return encounters.filter((encounter) => encounter.key !== encounterToDelete.key);
    })
  }
  const onPressEncounterHandler = (data) => {
    setSelectedEncounter(data);
    setSelectedScreen("EncounterScreen");
  }
  const cancelModalHandler = () => {
    setIsAddMode(false);
  }


  let content;
  console.log("Selecting Screen", selectedScreen);
  switch (selectedScreen) {

    case "StartScreen":
      console.log("StartScreen selected");
      content = <StartScreen
        encountersList={encountersList}
        onDeleteEncounter={onDeleteEncounter}
        EnableModal={() => { setIsAddMode(true) }}
        isAddMode={isAddMode}
        addEncounterHandler={addEncounterHandler}
        cancelModalHandler={cancelModalHandler}
        onPressEncounter={onPressEncounterHandler} />
      break;
    case "EncounterScreen":
      console.log("EncounterScreen selected");
      content = <EncounterScreen encounter={selectedEncounter} onPressBack={() => { setSelectedScreen("StartScreen") }} />
      break;
  }

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#DDD',
    alignItems: "center",
    justifyContent: 'flex-start',
    paddingTop: 24
  },
});
