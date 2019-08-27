import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Char from "./Char";

export const CharList = props => {
  console.log(props.encounter.personagens.length);

  let content;

  if (props.encounter.personagens.length != 0) {
    content = <FlatList
      data={props.encounter.personagens}
      style={{ backgroundColor: "#CCC" }}
      contentContainerStyle={{ flexGrow: 1, }}
      renderItem={itemData =>
        <Char id={itemData.item.key} itemData={itemData} />}
    />
  } else {
    content = <View style={{ height: "80%" ,alignItems:"center"}}>
      <Text>Add a First Char</Text>
    </View>
  }

  return (
    <View style={{ flex: 1, width: "90%", height: "80%", minHeight: "75%", maxHeight: "80%", paddingVertical: "2.5%" }}>
      {content}
      <View>
        <Button title="Add a New Char" onPress={()=>{console.log("New Char Should Be Added")}} />
      </View>
    </View>
  );
};

export default CharList;
