import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, Button,
  SafeAreaView
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Goals from './Goals.js'
import Tasks from './Tasks'
import SetReminder from './SetReminder'
import Entry from './Entry.js'
import Home from './Home.js'
import Review from './Review.js'
import dummyData from './dummyData'

let dummyGoals = [{name: 'Track my eating'}, {name: 'Run 1 mile everyday'}, {name: 'Spend time with friends'}, {name: 'Spend time with family'}, {name: 'Learn to cook'}, {name: 'Learn to play guitar'}];

let dummyTasks = [{name: 'Go grocery shopping'}, {name: 'Go to the mall'}, {name: 'Do laundry'}, {name: 'Meal prep for the week'}]

let exampleDataObject = {
  goals: dummyGoals,
  tasks: dummyTasks,
  entries: dummyData,
}


class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      data: exampleDataObject,
      page: 'home',
    }
    this.goNext = this.goNext.bind(this);
    this.updateProp = this.updateProp.bind(this);
    this.addEntry = this.addEntry.bind(this);
  }
  goNext(nextPage) {
    this.setState({page: nextPage})
  }
  updateProp(arr, prop) {
    let newState = Object.assign({}, this.state);
    newState.data[prop] = arr;
    this.setState(newState);
  }
  addEntry(entry) {
    let newState = Object.assign({}, this.state);
    newState.data.entries.push(entry);
    this.setState(newState);
    console.log(this.state.data.entries)
  }
  render () {
    let currentPage = <Home goNext={this.goNext}/>;
    if (this.state.page === 'goals') {
      currentPage = <Goals goNext={this.goNext} updateProp={this.updateProp} goals={this.state.data.goals}/>
    } else if (this.state.page === 'tasks') {
      currentPage = <Tasks goNext={this.goNext} updateProp={this.updateProp} tasks={this.state.data.tasks}/>;
    } else if (this.state.page === 'setReminder') {
      currentPage = <SetReminder goNext={this.goNext}/>
    } else if (this.state.page === 'newEntry') {
      currentPage = <Entry goNext={this.goNext} addEntry={this.addEntry} goals={this.state.data.goals}/>
    } else if (this.state.page === 'review') {
      currentPage = <Review goNext={this.goNext} entries={this.state.data.entries}/>
    }
    return (
      <SafeAreaView style={styles.container}>
        {currentPage}
      </SafeAreaView>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',

  },
});
