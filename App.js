
import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Modal } from "react-native";
import Color from "./Constants/Colors"
import EncounterList from "./Components/EncounterList"

export default function App() {
  const [isAddMode, setAddMode] = useState(false);


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36, fontWeight: "900", color: "teal" }}>Re-iNitiative</Text>
      <EncounterList />
      <Button color={Color.primary} title="Novo Encontro" onPress={() => { setAddMode(true) }} />
      <Modal visible={false} animationType="slide">
        <View> 

        </View>
      </Modal>
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
