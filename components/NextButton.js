import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const NextButton = (props) => {


  const onSubmit = () => {
    if (props.submit === 'goalsAndTasks'){
      props.updateProp(props.goals, props.prop)

    } else if (props.submit === 'reminder') {

    } else if (props.submit === 'newEntry') {
      props.addEntry(props.entry)
    }
    props.goNext(props.nextPage)
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
