import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.head}>STORY HUB</Text>
        <TextInput placeholder="Story Title" style={styles.box1} />
        <TextInput placeholder="Author" style={styles.box2} />
        <TextInput
          multiline={true}
          placeholder="Write your Story."
          style={styles.box3}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    marginTop: 40,
    textAlign: 'center',
    backgroundColor: 'rgb(242, 223, 227)',
    color: 'rgb(44, 6, 55)',
    fontSize: 30,
    height: 60,
    fontWeight: 'bold',
    borderColor: 'rgb(44, 6, 55)',
    borderWidth: 4,
    padding: 10,
  },
  box1: {
    marginTop: 60,
    borderColor: 'rgb(44, 6, 55)',
    borderWidth: 3,
    width: 190,
    alignSelf: 'center',
    textAlign: 'center',
    height: 40,
  },
  box2: {
    marginTop: 60,
    borderColor: 'rgb(44, 6, 55)',
    borderWidth: 3,
    width: 190,
    alignSelf: 'center',
    textAlign: 'center',
    height: 40,
  },
  box3: {
    marginTop: 60,
    borderColor: 'rgb(44, 6, 55)',
    borderWidth: 3,
    width: 190,
    height: 230,
    alignSelf: 'center',
    textAlign: 'center',
  },

  button: {
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: 'rgb(44, 6, 55)',
    width: 100,
    height: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(242, 223, 227)',
  },
});
