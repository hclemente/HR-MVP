import React from 'react';
import {
  StyleSheet, Text, View,
  TouchableOpacity
} from 'react-native';

const Checkbox = (props) => {

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row' }}
      onPress={() => props.toggleSelected(props.index)}
    >
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#006677',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: Platform.OS === 'ios' ? 2.8 : 5.7,
          left: Platform.OS === 'ios' ? -15 : -15
        }}
      >
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: props.isSelected ? '#006677' : 'white',
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          marginLeft: 15,
          color: '#006677'
        }}>{props.day}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
