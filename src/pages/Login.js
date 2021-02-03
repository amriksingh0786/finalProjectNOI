import React, { Component } from 'react';
import {
  StyleSheet,
  View,
    TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';
import { firebase } from "../firebase/config";
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password : "",
            errorMessage : "",
            hasError : false
        };
    }

    signupFun(){
        Actions.signup()
    }
    handleLogin = () => {
        console.log("login");
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('home'))
        .catch(error => this.setState({ errorMessage: error.message, hasError : true }))
    }
    render(){
        return(
            <View style={styles.container}>
                <Logo/>
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
                    value={this.state.password} />
                    <Text style={{color : "red", margin : 1}}>
                {
                    this.state.hasError ?  
                      this.state.errorMessage
                      : ""
                    }
                    </Text>
                <TouchableOpacity style={styles.button}  onPress={this.handleLogin}>
                    <Text style={styles.loginButtonText}>
                       Login
                    </Text>
                </TouchableOpacity>
                <View style={styles.signupcont}>
                    <TouchableOpacity onPress={this.signupFun}>
                    <Text style={styles.signupButton}>
                        SignUp 
                    </Text>
                    </TouchableOpacity>
                    <Text style={styles.signuptext}>
                        Instead
                    </Text>
                </View>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    container : {
        backgroundColor: '#455a64',
        flexGrow: 1,
        justifyContent:'flex-start',
        alignItems:'center',
      },
      signupcont : {
        flexGrow: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
      },
      signuptext :{
          color:'rgba(255,255,255,0.7)',
          fontSize:16,
          padding:3.5,
      },
      signupButton:{
          color : 'white',

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