
import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
const EncounterList = require("./Components/EncounterList");




export default function App() {
  const [isAddMode, setAddMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36, fontWeight: "900", color: "teal" }}>Re-iNitiative</Text>
      <EncounterList />
      <Button title="Novo Encontro" onPress={()=>setAddMode(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24
  },
});
