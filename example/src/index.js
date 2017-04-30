/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Environment variables
        </Text>

        {Object.keys(process.env).map(key =>
          <Text style={styles.variable} key={key}>
            {key}: {process.env[key]}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  variable: {
    textAlign: 'left',
    paddingHorizontal: 20,
    marginBottom: 5
  }
})
