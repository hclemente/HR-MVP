import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const BackButton = (props) => {

    return (

        <TouchableOpacity style={props.styles} onPress={()=>props.goNext(props.nextPage)}>
          <Image style={styles.button} source={require('../assets/left_arrow_reverse.png')}/>
        </TouchableOpacity>

    );

}

export default BackButton;

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40
  },
});
