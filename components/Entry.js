import React from 'react';
import {
  StyleSheet, Text, View, TextInput,
  Button, TouchableOpacity,
  Keyboard, Platform, TouchableWithoutFeedback
} from 'react-native';
import Goal from './Goal'
import NextButton from './NextButton';
import Checkbox from './Checkbox'
import BackButton from './BackButton'
import {Picker} from '@react-native-picker/picker';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
  onPress={() => Keyboard.dismiss()}>
  {children}
  </TouchableWithoutFeedback>
  );

  // const months = ['January', 'February', 'March', 'April',
  //                 'May', 'June', 'July', 'August', 'September',
  //                 'October', 'November', 'December']
  const months = ['Jan', 'Feb', 'Mar', 'Apr',
                  'May', 'Jun', 'Jul', 'Aug', 'Sep',
                  'Oct', 'Nov', 'Dec']

  var date = new Date(),
  month = date.getMonth(),
  day = date.getDate(),
  year = date.getFullYear(),
  hours = date.getHours(),
  minutes = date.getMinutes();

  let morningOrAfter;
  if (hours > 12) {
    morningOrAfter = 'PM';
  } else {
    morningOrAfter = 'AM'
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (minutes < 10) {
    minutes = '0' + minutes.toString();
  }
  let stamp = `${months[month]} ${day}, ${year} at ${hours}:${minutes} ${morningOrAfter}`;

class Entry extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      goals: this.props.goals,
      currentGoal: this.props.goals[0],
      inputNote: '',
    }
    this.updateGoal = this.updateGoal.bind(this);
  }
  updateGoal (goal) {
    let newState = Object.assign({}, this.state);
    newState.currentGoal = goal;
    this.setState(newState);
  }
  render() {
      return (
        // <DismissKeyboard>
        <View style={styles.container}>
        <View style={styles.timeStampContainer}>
          <Text style={styles.timeStamp}>{stamp}</Text>
        </View>
        <View style={styles.headerContainer}>
        <BackButton goNext={this.props.goNext} nextPage='home' styles={styles.backButton}/>
        <Text style={styles.header}> Make A New Entry  </Text>
        </View>
        <Text>Select A Goal</Text>
        <View style={styles.pickerView}>
        <Picker
          itemStyle={{height: 47, color: '#f7ba72', fontWeight: 'bold', }}
          prompt='Select a goal'
          selectedValue={this.state.currentGoal}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => {this.updateGoal(itemValue)}}
        >
          {this.state.goals.map((goal, index) => {
            return (<Picker.Item
                      label={goal.name}
                      value={goal.name}
                      key={index}

                      // itemStyle={{color: '#fff'}}
                    />)})}
        </Picker>
        </View>
        <TextInput
          multiline={true}
          style={styles.inputNote}
          onChangeText={(inputNote) => { this.setState({inputNote})}}
          value={this.state.inputNote}
          placeholder='Write notes on your technique'
        />
        <NextButton
          styles={styles.nextButton}
          goNext={this.props.goNext}
          addEntry={this.props.addEntry}
          entry={{
            goal: this.state.currentGoal,
            note: this.state.inputNote,
            dateLabel: stamp,
            date: date
          }}
          submit='newEntry'
          nextPage='home'
        />
        </View>
        // </DismissKeyboard>
      )
  }
}

export default Entry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeStampContainer: {
    position: 'absolute',
    top: 15,
    backgroundColor: '#fff'
  },
  timeStamp: {
    fontSize: 20
  },
  headerContainer: {
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  header: {
    fontSize: 28,
    marginBottom: 20,
  },
  pickerView: {
    height: 50,
    width: '65%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#fff',
    marginBottom: 10,

  },
  picker: {
    marginLeft: Platform.OS === 'android' ? 3 : null,

  },
  inputNote: {
    height: 100,
    width: '75%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ebebeb',
    color: 'black',
    marginBottom: 10,

  },
  nextButton: {
    position: 'absolute',
    top: '90%',
  },
  backButton: {
    marginBottom: Platform.OS === 'android' ? 19 : 25,
    marginRight: 10,
    width: 38,
    height: 38
  },
});
