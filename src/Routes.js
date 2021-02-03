import React, { Component } from 'react';
import {Router,Scene,Stack} from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={'true'}>
                <Scene key="login" component={Login}  title="Login" initial={true}/>
                <Scene key="signup" component={Signup} title="Register" />
                <Scene key="home" component={Main} title="Home" />
                </Stack>
            </Router>
        );
    }
}