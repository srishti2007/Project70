import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.head}>STORY HUB</Text>
        <Text style={styles.displayText}>Read Story</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    marginTop: 0,
    textAlign: 'center',
    backgroundColor: 'rgb(63, 86, 154)',
    color: 'white',
    fontSize: 30,
    height: 40,
    fontWeight: 'bold',
  },
  displayText:{
    alignSelf:'center',
    marginTop:100,
    fontSize:20
  }
});
