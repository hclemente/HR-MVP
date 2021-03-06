import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Image,
  Button, TouchableOpacity, ScrollView,
  Keyboard, Platform, TouchableWithoutFeedback
} from 'react-native';
import Goal from './Goal'
import NextButton from './NextButton';

// const rightArrow = '../assets/right_arrow_icon.png';
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
  onPress={() => Keyboard.dismiss()}>
  {children}
  </TouchableWithoutFeedback>
  );

class Home extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
        data: this.props.data
    }
    this.addGoal = this.addGoal.bind(this);
    this.selectGoalToggle = this.selectGoalToggle.bind(this);
    // this.setSelectedValue = this.setSelectedValue.bind(this)
  }

  addGoal(goal) {
    let newState = Object.assign({}, this.state);
    newState.goals.push({name: goal, isSelected: false});
    this.setState(newState);
    newState.inputGoalText = '';
    this.setState(newState);
  }

  selectGoalToggle(index) {
    let newState = Object.assign({}, this.state);
    if (newState.goals[index].selected === undefined) {
      newState.goals[index].selected = true;
    } else {
      newState.goals[index].selected = !newState.goals[index].selected;
    }
    this.setState(newState);
  }

  render() {
      return (
        // <DismissKeyboard>
        <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Image style={styles.icon} source={require('../assets/logo.png')}/>
        {/* <Text style={styles.header}> Accountability Journal </Text> */}
        </View>
        <TouchableOpacity
          style={styles.addGoal}
          onPress={() => {
            this.props.goNext('goals')
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Add Goals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addGoal}
          onPress={() => {
            this.props.goNext('tasks')
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Add Tasks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addGoal}
          onPress={() => {
            if (this.state.data.goals.length !== 0) {
              this.props.goNext('newEntry')
            } else {
              alert('You must add a goal before you can make an entry')
            }

          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Make A New Entry
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addGoal}
          onPress={() => {
            this.props.goNext('review')
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Review Entries
          </Text>
        </TouchableOpacity>
        </View>
        // </DismissKeyboard>
      )
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 200,
    width: 200
  },
  headerContainer: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGoals: {
    height: 50,
    width: '75%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    backgroundColor: '#ebebeb',
    color: 'black',
    marginBottom: 10,


  },
  addGoal: {
    minHeight: 50,
    width: '60%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#f7ba72',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',

  },
});


