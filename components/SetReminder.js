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

var arr = [];
var arr12hour = [];
for(let i=0; i<24; i++) {
  for(let j=0; j<4; j++) {
    arr.push(i + ":" + (j===0 ? "00" : 15*j));
    if (i === 0) {
      arr12hour.push(12 + ":" + (j===0 ? "00" : 15*j) + ' AM');
    }
    else if (i < 13) {
      arr12hour.push(i + ":" + (j===0 ? "00" : 15*j) + ' AM');
    } else {
      arr12hour.push((i - 12) + ":" + (j===0 ? "00" : 15*j) + ' PM');
    }

  }
}

var d = new Date(),
  h = d.getHours(),
  m = 15 * Math.floor(d.getMinutes()/15),
  stamp = h + ":" + (m === 0 ? "00" : m);

var pos = arr.indexOf(stamp),
  timelist = arr.slice(pos).concat(arr.slice(0,pos));

const days = [
  {label: 'Monday', value: 'monday', isSelected: false},
  {label: 'Tuesday', value: 'tuesday', isSelected: false},
  {label: 'Wednesday', value: 'wednesday', isSelected: false},
  {label: 'Thursday', value: 'thursday', isSelected: false},
  {label: 'Friday', value: 'friday', isSelected: false},
  {label: 'Saturday', value: 'saturday', isSelected: false},
  {label: 'Sunday', value: 'Sunday', isSelected: false},
]

class SetReminder extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      currentTime: arr12hour[pos],
      times: arr12hour,
      currentDay: 'Everyday',
      days: days
    }
    this.toggleSelected = this.toggleSelected.bind(this);
  }

  toggleSelected(index) {
    let newState = Object.assign({}, this.state);
    newState.days[index].isSelected = !newState.days[index].isSelected;
    this.setState(newState);
  }

  render() {
    let someSelected = false;
    for (let i = 0; i < this.state.days.length; i++) {
      if (this.state.days[i].isSelected === true) {
        someSelected = true;
      }
    }
      return (
        // <DismissKeyboard>
        <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.header}> Schedule Notifications  </Text>
        <Text style={styles.header2}> To Do Selected Tasks</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <BackButton
          styles={{marginTop: 7}}
          goNext={this.props.goNext}
          nextPage='tasks'/>
        <View style={styles.pickerView}>
        <Picker
          itemStyle={{height: 47, color: '#f7ba72', fontWeight: 'bold', }}
          prompt='Set a reminder to do my tasks at'
          selectedValue={this.state.currentTime}
          style={styles.picker}
          onValueChange={(currentTime, itemIndex) => {this.setState({currentTime})}}
        >
          {this.state.times.map((time, index) => {
            return (<Picker.Item label={time} value={time} key={index} />)})}
        </Picker>
        </View>
        </View>
        <View style={{ }}>
          {this.state.days.map((day, index) => {
            return (
              <View style={styles.checkBoxContainer} key={index}>
                <Checkbox
                  style={styles.checkBoxes}
                  isSelected={day.isSelected}
                  day={day.label}
                  toggleSelected={this.toggleSelected}
                  index={index}
                />
              </View>
            )
          })}
        </View>

        <NextButton
          someSelected={someSelected}
          styles={styles.nextButton}
          goNext={this.props.goNext}
          nextPage='home'
          submit='reminder'
        />
        </View>
        // </DismissKeyboard>
      )
  }
}

export default SetReminder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: Platform.OS === 'ios' ? 25 : 20,
  },
  header2: {
    fontSize: Platform.OS === 'ios' ? 25 : 20,
    marginBottom: 20,
  },
  pickerView: {
    height: 50,
    width: '40%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#fff',
    marginBottom: 10,
  },
  picker: {
    marginLeft: Platform.OS === 'android' ? 3 : null,
  },
  checkBoxContainer: {
    width: '35%',
    flexDirection: 'row',
    marginBottom: 9
  },
  checkBoxes: {
    flex: 1,
  },
  nextButton: {
    position: 'absolute',
    top: '90%',

  }
});
