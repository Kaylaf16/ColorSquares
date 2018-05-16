/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Squares extends Component<Props> {
  constructor(props)
{
  super(props);
  this.state={
    backcolors:'',
    currentcolor:0,
    allColors:['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow']
  };
 this.alert= this.alert.bind(this)
}
componentWillMount(){
  this.setState({backcolors:this.state.allColors[this.props.current%7]})
}
  alert(){
    if(this.props.current%7 == 6){

        this.setState({backcolors:this.state.allColors[0]})
    }
    else{
    this.setState({backcolors:this.state.allColors[(this.props.current%7)+1]})
  }
  }
  render() {
    return (
      <TouchableHighlight onPress={this.alert}>
        <View style={{height:30,width:30,margin:10,backgroundColor:this.state.backcolors}}></View>
      </TouchableHighlight>
    );
  }
}
type Props = {};
export default class App extends Component<Props> {
  render() {
    let squares = []
      for (var i = 0;i < 49;i++)
      {
        squares.push(<Squares current = {i}></Squares>)
      }

    return (
      <View style={styles.container}>
        {squares}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display:"flex",
    padding:10,
    paddingTop:100,
    flex: 1,
    flexWrap:'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  Color: function(){

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
});
