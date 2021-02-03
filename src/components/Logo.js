import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  ScrollView,
} from 'react-native';
export default class Logo extends Component{
    render(){
        return(
            
            <View style={styles.container}>
               <Image style={{width:50,height:50}}source={require('../images/logo.png')} />
              
            
            <Text style={{color:'rgba(255,255,255,0.7)',marginVertical:15}}>
                   Welcome to NOI Technologies.
               </Text>
            </View>
            
        );
    }
}

const styles=StyleSheet.create({
    container : {
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems:'center',
        padding:10,
    },
   
});