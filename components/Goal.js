import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Goal = (props) => {
  return (
    <View style={props.styleProp}>
      <Text
        style={{color: 'white'}}
      >
      {props.goal}
    </Text>
    </View>

  )
}

export default Goal;