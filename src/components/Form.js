import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Form extends Component{
    state = { email: '', password: '', errorMessage: null }

    render(){
        return(
            
            <View style={styles.container}>

                <TextInput 
                    style={styles.InputBox} 
                    placeholder='Username'
                    placeholderTextColor='white'
                    keyboardType='email-address'
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}/>
              
                <TextInput 
                    style={styles.InputBox} 
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor='white'
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}/>
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.loginButtonText}>
                       {this.props.type}
                    </Text>
                </TouchableOpacity>
            
            </View>
            
        );
    }
}

const styles=StyleSheet.create({
    container : {
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
    },
    InputBox:{
       width:300,
       backgroundColor:'rgba(255,255,255,0.3)',
       borderRadius:25,
       paddingHorizontal:27,
       fontSize:16,
       color:'white',
       marginVertical:16,
   },
   button:{
    width:300,
    backgroundColor:'#13c1ca',
    borderRadius:25,
    paddingHorizontal:27,
    fontSize:16,
    color:'white',
    paddingVertical:16,
   },
   loginButtonText:{
        fontSize:16,
        fontWeight:'500',
        color:'white',
        textAlign:'center',
        
   }
});