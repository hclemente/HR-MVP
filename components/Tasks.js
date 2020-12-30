import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import Goal from './Goal'
import NextButton from './NextButton'


class Tasks extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
        inputGoalText: '',
        goals: []
    }
    this.addGoal = this.addGoal.bind(this)
  }

  addGoal(goal) {
    let newState = Object.assign({}, this.state);
    newState.goals.push({name: goal, isSelected: false});
    this.setState(newState);
    newState.inputGoalText = '';
    this.setState(newState);
  }

  render() {
      return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.header}> What tasks will you set up </Text>
        <Text style={styles.header2}>for yourself?</Text>
        </View>
        <TextInput
          style={styles.inputGoals}
          onChangeText={(inputGoalText) => { this.setState({inputGoalText})}}
          value={this.state.inputGoalText}
          placeholder='Write your own task...'
        />
        <TouchableOpacity
          style={styles.addGoal}
          onPress={() => this.addGoal(this.state.inputGoalText)}
        >
          <Text
            style={{color: 'white'}}
          >
            Add Task
          </Text>
        </TouchableOpacity>
        {this.state.goals.map((goal, index) =>
        <Goal
          styleProp={styles.listGoals}
          key={index}
          goal={goal.name}
        />)}
        <NextButton goNext={this.props.goNext}/>
        </View>
      )
  }
}

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 20,
  },
  header2: {
    fontSize: 20,
    marginBottom: 20,
  },
  inputGoals: {
    height: 50,
    width: '75%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#ebebeb',
    color: 'black',
    marginBottom: 10,
    paddingLeft: 90
  },
  addGoal: {
    height: 50,
    width: '60%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'black',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center'
  },
  listGoals: {
    height: 50,
    width: '60%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'red',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center'
  }
});

// backgroundColor: '#27FFD8',

