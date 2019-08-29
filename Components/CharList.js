import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import Char from "./Char";

export const CharList = props => {
  let content;

  if (props.encounter.personagens.length != 0) {
    content = <FlatList
      data={props.encounter.personagens}
      style={{ backgroundColor: "#CCC" }}
      contentContainerStyle={{ flexGrow: 1, paddingVertical:5 }}
      renderItem={itemData =>
        <Char id={itemData.item.key} itemData={itemData} />}
    />
  } else {
    content = <View style={{ height: "80%", alignItems: "center" }}>
      <Text>Add a First Char</Text>
    </View>
  }

  return (
    <View style={{ flex: 1, width: "90%", height: "80%", minHeight: "75%", maxHeight: "80%", paddingVertical: "2.5%" }}>
      {content}
      <View>
        {/* Should add Here the commands to Re-order The list, by name, by init, by turns elapsed(?) etc... */}
        <Button title="SortChars" onPress={props.charSort}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});
export default CharList;
