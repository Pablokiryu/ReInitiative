import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import Color from "../Constants/Colors"

const InputModal = props => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const TitleInpuHandler = (enteredTitle) => {
    setEnteredTitle(enteredTitle);
  };
  const addTitleHandler = () => {
    props.onAddEncounter(enteredTitle);
    setEnteredTitle("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.card}>
          <TextInput placeholder="New Encounter Title goes here"
            style={styles.input}
            onChangeText={TitleInpuHandler}
            value={enteredTitle}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="CANCEL" color="red" onPress={props.onCancel} />
            </View>
            <View style={styles.button}>
              <Button color={Color.secondary} title="ADD" onPress={addTitleHandler} />
            </View>
          </View>
        </View>
      </View>
    </Modal >
  );
}

const styles = StyleSheet.create({
  buttonContainer:
  {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button:
  {
    width: "45%",
    borderRadius:5
  },
  inputContainer:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  },
  input:
  {
    color: "purple",
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
    padding: 0,
    marginBottom: 10
  }, card:
  {
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    backgroundColor: "white",
    elevation: 5,
    padding: 5,
    borderRadius: 20
  }
});
export default InputModal;