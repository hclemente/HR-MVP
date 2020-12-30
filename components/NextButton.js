import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const NextButton = (props) => {

    return (

        <TouchableOpacity style={styles.button} onPress={()=>props.goNext(props.nextPage)}>
          <Image style={styles.button} source={require("../assets/right_arrow_icon.png")}/>
        </TouchableOpacity>

    );

}

export default NextButton;

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40
  },
});
