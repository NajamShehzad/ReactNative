import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header/header'
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header name={"Header Albums"} />
      </View>
    );
  }

}



