import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Goal = (props) => {
  return (
    <View style={props.selected ? styles.selected : props.styleProp}>
      <Text
        style={{color: '#3faf9a', fontWeight: 'bold', fontSize: 20}}
      >
      {props.goal}
    </Text>
    </View>

  )
}

export default Goal;

const styles = StyleSheet.create({
  selected: {
    minHeight: 50,
    width: 300,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#006677',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center'
  },
});