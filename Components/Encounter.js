import React from 'react';
import { View,TouchableOpacity,Text,Button, StyleSheet } from 'react-native';
import Color from "../Constants/Colors";
// import { Container } from './styles';
const Encounter = props =>
{
  return(
    <TouchableOpacity onPress={()=>{console.log(props.itemData.item.title);}}>
    <View style={styles.encounterStyle}>
      <Text style={{flex:1}}>{props.itemData.item.title}</Text>
      <Button color={Color.secondary} title="X" style={{width:"40%",padding:5}} onPress={props.onDelete.bind(this,props.itemData.item)}/>
    </View>   
  </TouchableOpacity>
  );
}

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





export default Encounter;
