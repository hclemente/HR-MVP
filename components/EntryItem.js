import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const EntryItem = (props) => {
  let note = props.entry.note;
  let maxCharacters = 110;
  if (note.length > maxCharacters) {
    note = note.substring(0,maxCharacters) +'...'
  }
  return (
    <View style={props.styleProp}>
        <Text style={{color: '#3faf9a', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>
          {props.entry.goal}
        </Text>
    <Text style={{marginBottom: 10}}>
      {note}
      </Text>
    <Text>
      {props.entry.dateLabel}
      </Text>
    </View>

  )
}

export default EntryItem;

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