import React from 'react';
import { View,TouchableOpacity,Text,Button, StyleSheet } from 'react-native';

// import { Container } from './styles';
const Encounter = props =>
{
  return(
    <TouchableOpacity>
    <View style={styles.encounterStyle}>
      <Text style={{flex:1}}>{props.itemData.item.value}</Text>
      <Button title="X" style={{width:"40%"}} onPress={props.onDelete.bind(this,props.itemData.item)}/>
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
