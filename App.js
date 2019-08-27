
import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Modal } from "react-native";
import Color from "./Constants/Colors"
import EncounterList from "./Components/EncounterList"
import InputModal from "./Components/inputModal";


export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [encountersList, setEncounters] = useState([{ key: "0", title: "Mesa Mago",personagens:[{}] },
  { key: "1", title: "Mesa Mago",personagens:[{}] },
  { key: "2", title: "Mesa Mago",personagens:[{}] },
  { key: "3", title: "Mesa Mago",personagens:[{}] },
  { key: "4", title: "Mesa Mago",personagens:[{}] },
  { key: "5", title: "Mesa Mago",personagens:[{}] },
  { key: "6", title: "Mesa Mago",personagens:[{}] },
  { key: "7", title: "Mesa Mago",personagens:[{}] },
  { key: "8", title: "Mesa Mago",personagens:[{}] },
  { key: "9", title: "Mesa Mago",personagens:[{}] },
  { key: "10", title: "Mesa Mago",personagens:[{}] },
  { key: "11", title: "Mesa Mago",personagens:[{}] }, 
  { key: "12", title: "Mesa Mago",personagens:[{}] },
  { key: "13", title: "Mesa Mago",personagens:[{}] },
  { key: "14", title: "Mesa Mago",personagens:[{}] },
  { key: "15", title: "Mesa Mago",personagens:[{}] },

]);

  const addEncounterHandler = newTitle => {
    
    setEncounters(encountersList => [...encountersList,{ key: encountersList.length.toString(), title: newTitle }])
    setIsAddMode(false);
    console.log(encountersList);
  }
  const onDeleteEncounter = encounterToDelete => {
    setEncounters(encounters => {
      return encounters.filter((encounter) => encounter.key !== encounterToDelete.key);
    })
  }
  const cancelModalHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36, fontWeight: "900", color: "teal" }}>Re-iNitiative</Text>
      <EncounterList encounters={encountersList} onDeleteEncounter={onDeleteEncounter} />
      <Button color={Color.primary} title="Novo Encontro" onPress={() => setIsAddMode(true)} />
      <InputModal visible={isAddMode} onAddEncounter={addEncounterHandler} onCancel={cancelModalHandler} />
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
