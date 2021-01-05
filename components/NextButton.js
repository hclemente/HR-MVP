import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const NextButton = (props) => {


  const onSubmit = () => {
    if (props.submit === 'goalsAndTasks') {
      if (props.someSelected) {
        props.updateProp(props.goals, props.prop)
        props.goNext(props.nextPage)
      } else {
        alert('At least one task must be selected!')
      }

    } else if (props.submit === 'reminder') {
      if (props.someSelected) {
        props.goNext(props.nextPage)
      } else {
        alert('At least one day must be selected!')
      }
    } else if (props.submit === 'newEntry') {
      if (props.entry.note !== '') {
        props.addEntry(props.entry)
        props.goNext(props.nextPage)
      } else {
        alert('Notes cannot be empty!')
      }

    }

  }
    return (

        <TouchableOpacity
          style={props.styles}
          onPress={()=>onSubmit()}>
          <Image style={styles.button} source={require('../assets/right_arrow_icon.png')}/>
        </TouchableOpacity>

    );

}

export default NextButton;

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60
  },
});
