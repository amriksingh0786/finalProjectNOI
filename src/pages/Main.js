import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Touchable } from 'react-native';
import  { firebase } from "../firebase/config";
export default class Main extends React.Component {
  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}
handleLogout = ()=>{
  
     this.props.navigation.navigate('login')
  
  
}

render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Touchable onPress={this.handleLogout}>
          <Text>
            SignOut
          </Text>
        </Touchable>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})