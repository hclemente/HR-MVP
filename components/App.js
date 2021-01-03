import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Goals from './Goals.js'
import Tasks from './Tasks'


class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      weeklyGoal: '',
      weeklyTask: '',
      page: 'goals',
    }
    this.goNext = this.goNext.bind(this);
  }
  goNext(nextPage) {
    this.setState({page: nextPage})
  }
  render () {
    let currentPage = <Goals goNext={this.goNext}/>;
    if (this.state.page === 'tasks') {
      currentPage = <Tasks goNext={this.goNext}/>;
    }
    return (
      <View style={styles.container}>
        {currentPage}
      </View>
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
