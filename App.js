import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header/header';
import AlbumList from './src/components/AlbumList/AlbumList';
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header name={"Albums"} />
        <AlbumList />
      </View>
    );
  }

}



