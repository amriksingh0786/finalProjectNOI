import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
 
} from 'react-native';

import Routes from './src/Routes';
import Login from './src/pages/Login';


export default class App extends Component{
  render() {
    return (
    
      <View style={styles.container}>
        <StatusBar
        backgroundColor="#13c1ca"
       barStyle="light-content"/>
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#455a64',
    flex: 1,
    justifyContent:'center',
   
  }
});