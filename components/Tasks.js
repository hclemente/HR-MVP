import React from 'react';
import {
  StyleSheet, Text, View,
  TextInput, Button, TouchableOpacity,
  ScrollView, Keyboard, Platform, TouchableWithoutFeedback
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

class Tasks extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
        inputGoalText: '',
        goals: this.props.tasks
    }
    this.addGoal = this.addGoal.bind(this);
    this.removeGoal = this.removeGoal.bind(this);
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

  removeGoal(index) {
    let newState = Object.assign({}, this.state);
    newState.goals.splice(index, 1);
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
        <Text style={styles.header}> What tasks will you set up </Text>
        <Text style={styles.header2}>for yourself?</Text>
        </View>

        <TextInput
          multiline={true}
          style={styles.inputGoals}
          onChangeText={(inputGoalText) => { this.setState({inputGoalText})}}
          value={this.state.inputGoalText}
          placeholder='Write your own task...'
        />
        <TouchableOpacity
          style={styles.addGoal}
          onPress={() => {
            this.addGoal(this.state.inputGoalText);
            Keyboard.dismiss();
          }}
        >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Add Task
          </Text>
        </TouchableOpacity>
        <Text>Tap to select for push notification</Text>
        <Text>Press and hold to remove</Text>
        <View style={{height:'45%'}}>
        <ScrollView >
          {this.state.goals.map((goal, index) =>
          <TouchableOpacity
          onPress={()=> this.selectGoalToggle(index)}
          key={index}
          onLongPress={()=>this.removeGoal(index)}
          >
          <Goal
            styleProp={styles.listGoals}
            key={index}
            goal={goal.name}
            selected={goal.selected}
          />
          </TouchableOpacity>
          )}
        </ScrollView>
        </View>
        <NextButton
          styles={styles.nextButton}
          goNext={this.props.goNext}
          updateProp={this.props.updateProp}
          goals={this.state.goals}
          prop='tasks'
          nextPage='setReminder'
          submit='goalsAndTasks'
        />

        </View>
        // {/* </DismissKeyboard> */}
      )
  }
}

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
  },
  header2: {
    fontSize: 20,
    marginBottom: 20,
  },
  inputGoals: {
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
  addGoal: {
    height: 50,
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
    alignItems: 'center'
  },
  listGoals: {
    minHeight: 50,
    width: 300,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#27FFD8',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  nextButton: {
    position: 'absolute',
    top: '90%',
  }
});
