import Dimensions from 'Dimensions'
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
  this.setState({currentcolor:this.props.current})
}
  alert(){
    if(this.state.currentcolor%7 == 6){

        this.setState({backcolors:this.state.allColors[0]})
        this.setState({currentcolor:this.state.currentcolor+1})
    }
    else{
        this.setState({backcolors:this.state.allColors[(this.state.currentcolor%7)+1]})
        this.setState({currentcolor:this.state.currentcolor+1})
    }

  }
  render() {
    return (
      <TouchableHighlight onPress={this.alert}>
        <View style={{height:40,width:(Dimensions.get('window').width/7.4),margin:1,marginTop:5,marginBottom:5,backgroundColor:this.state.backcolors}}></View>
      </TouchableHighlight>
    );
  }
}
type Props = {};
export default class App extends Component<Props> {
  render() {
    let squares = []
      for (let i = 0;i < 49;i++)
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
    paddingTop:100,
    flex: 1,
    flexWrap:'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row'
  }
});
