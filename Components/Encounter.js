import React from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import Color from "../Constants/Colors";
// import { Container } from './styles';
const Encounter = props => {
  return (
    <TouchableOpacity onPress={props.onPressEncounter.bind(this, props.itemData.item)}>
      <View style={styles.encounterStyle}>
        <View style={{ flex: 5, padding: 5, justifyContent: "center", alignItems: 'center', }} >
          <Text style={{ fontSize: 22, fontWeight: "bold", }}>
            {props.itemData.item.title}
          </Text>
        </View>
        <View style={{ flex: 1, padding: 5, justifyContent: "center", alignItems: 'center', }} >
          <Button color={Color.secondary} title="X" onPress={props.onDelete.bind(this,props.itemData.item)} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  encounterStyle: {
    flex:1,
    backgroundColor: "#BBB",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginVertical: 2,
    marginHorizontal: 1,
  }
});





export default Encounter;
