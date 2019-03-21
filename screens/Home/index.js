import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import * as Animatable from 'react-native-animatable';


export default class Home extends Component{

  constructor(props){
      super(props)
  }

  gotoScreen(screenName){
    Navigation.push(this.props.componentId,{
        component:{
            name: screenName
        }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <Animatable.Image 
          style={styles.logos}
          source={require("../../assets/images/react-min.png")}
           />
          <Animatable.Image 
          style={styles.logos} 
          source={require("../../assets/images/navigation-min.png")} 
          animation="pulse"
          easing="ease-in-circ"
          iterationCount={"infinite"}
          />
          <Animatable.Image 
          style={styles.logos} 
          source={require("../../assets/images/redux-min.png")} 
          />
        </View>
        <Text style={styles.title}> React Native Boiler Plate </Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logos:{
      width:50,
      height:50,
      margin:5
  },
  title:{
    fontFamily:'Caveat-Regular',
    color:'white',
    fontSize:25
  }
});
