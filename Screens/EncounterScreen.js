import React from 'react';
import { View, Modal, Text, Button, StyleSheet } from 'react-native';
import CharList from "../Components/CharList"

const EncounterScreen = props => {
  return (
    <View style={styles.screen}>
        <Text style={styles.title}>{props.encounter.title}</Text>
        <Text >NumberOfRounds</Text>
        <CharList encounter={props.encounter} charSort={props.charSort} />
        <Button title="Add a New Char" onPress={() => { console.log("New Char Should Be Added") }} />
        <Modal visible="false" >
          <View>
            {/** should add Here the card for editing the selected Char. Will need Redux to do it probably.... */}
          </View>
        </Modal>
        <Button title= "Back" onPress={props.onPressBack}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width:"90%",
    alignItems: "center"
  },title:{
    fontSize:30,
    fontWeight:"bold"
  }
});





export default EncounterScreen;
