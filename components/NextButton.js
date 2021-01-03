import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const NextButton = (props) => {

    return (

        <TouchableOpacity style={props.styles} onPress={()=>props.goNext(props.nextPage)}>
          <Image style={styles.button} source={require('../assets/right_arrow_icon.png')}/>
        </TouchableOpacity>

    );

}

export default NextButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50
  },
});
