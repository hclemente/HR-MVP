import React from 'react';
import {
  StyleSheet, Text, View, TextInput,
  Button, TouchableOpacity, ScrollView,
  Keyboard, Platform, TouchableWithoutFeedback
} from 'react-native';
import Goal from './Goal'
import NextButton from './NextButton';
import BackButton from './BackButton';
import EntryItem from  './EntryItem'
import dummyData from './dummyData'


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
  onPress={() => Keyboard.dismiss()}>
  {children}
  </TouchableWithoutFeedback>
  );

class Review extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
        inputGoalText: '',
        entries: this.props.entries
    }
    this.search = this.search.bind(this);
  }

  search(text) {
    this.setState({inputGoalText: text})
  }

  search(text) {
    let newState = Object.assign({}, this.state);
    newState.inputGoalText = text;
    let searched = [];

    if (text !== '') {
      for (let i = 0; i < this.props.entries.length; i++) {
        let currentString = this.props.entries[i].goal.toLowerCase();
        if (currentString.includes(text.toLowerCase())) {
          searched.push(this.props.entries[i])
        }
      }
      newState.entries = searched;
    } else {
      newState.entries = this.props.entries;
    }
    this.setState(newState)
  }

  render() {
      return (
        <DismissKeyboard>
        <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.header}> My Entries </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <BackButton
            styles={styles.backButton}
            goNext={this.props.goNext}
            nextPage='home'
          />
          <TextInput
            multiline={true}
            style={styles.inputGoals}
            onChangeText={(inputGoalText) => { this.search(inputGoalText)}}
            // onSubmitEditing={this.searchSubmit}
            value={this.state.inputGoalText}
            placeholder='Search'
          />
        </View>

        <View style={{height: Platform.OS === 'ios' ? '80%' : '75%'}}>
        <ScrollView >
          {this.state.entries.map((entry, index) =>
          { if (entry.goal !== undefined && entry.note !== undefined && entry.date !== undefined && entry.dateLabel !== undefined)
            return (
                <TouchableOpacity
                onLongPress={()=>this.props.removeEntry(index)}
                key={index}
              >

              <EntryItem
                styleProp={styles.listGoals}
                key={index}
                entry={entry}
              />
              </TouchableOpacity>
            )
          }

          )}
        </ScrollView>
        </View>
        </View>
        </DismissKeyboard>
      )
  }
}

export default Review;

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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  header: {
    fontSize: 35,
    marginBottom: 20,
    marginLeft: 10
  },
  inputGoals: {
    height: 50,
    width: '51%',
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
    fontSize: 20
  },
  listGoals: {
    minHeight: 50,
    width: 275,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'flex-start'
  },
  nextButton: {
    position: 'absolute',
    top: '90%',
  },
  backButton: {
    marginRight: 10,
    marginTop: 4,
    width: 50,
    height: 50
  },
});


