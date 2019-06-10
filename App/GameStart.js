import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Grid from './Grid';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{ content: 1, open: false }, { content: 2, open: false }, { content: 3, open: false }, { content: 4, open: false }]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'red' }} >
         
        </View>
        <View style={styles.boardContainerr} >
            <Grid 
              size={6}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  boardContainerr: {
    flex: 5,
    padding: 20
  }
});
