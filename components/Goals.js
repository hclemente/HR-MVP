import React from 'react';
import {
  StyleSheet, Text, View, TextInput,
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

class Tasks extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
        inputGoalText: '',
        goals: [{name: 'Roundhouse'}, {name: 'Switchkick'}, {name: 'Cross'}]
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
        <Text style={styles.header}> What do you want to work </Text>
        <Text style={styles.header2}>on this week?</Text>
        </View>


        <TextInput
          multiline={true}
          style={styles.inputGoals}
          onChangeText={(inputGoalText) => { this.setState({inputGoalText})}}
          // onSubmitEditing={this.searchSubmit}
          value={this.state.inputGoalText}
          placeholder='Write some goals...'
        />


        <TouchableOpacity
          style={styles.addGoal}
          onPress={() => {
            this.addGoal(this.state.inputGoalText);
            Keyboard.dismiss();
          }}
        >
          <Text
            style={{color: 'white', fontWeight: 'bold'}}
          >
            Add Goal
          </Text>
        </TouchableOpacity>
        <View style={{height:'45%'}}>
        <ScrollView >
          {this.state.goals.map((goal, index) =>
          <TouchableOpacity
          onPress={()=> this.selectGoalToggle(index)}
          key={index}
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
          nextPage='tasks'
        />

        </View>
        // </DismissKeyboard>
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
    alignItems: 'center'
  },
  nextButton: {
    position: 'absolute',
    top: '90%',
    right: Platform.OS === 'ios' ? null : '2%'
  }
});

// backgroundColor: '#27FFD8',

{/* <Picker
itemStyle={{height: 44}}
prompt='Select A Saved Goal'
selectedValue={this.state.pickerValue}
style={styles.picker}
onValueChange={(pickerValue, itemIndex) => {this.setState({pickerValue})}}
>
{this.state.goalsSaved.map((goal, index) =>
  <Picker.Item label={goal.name} value={goal.name} key={index}/>
)}
</Picker> */}