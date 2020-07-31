import React, { Component } from 'react';
import { View, Text ,StyleSheet,Dimensions } from 'react-native';
import {Spinner} from 'native-base'
import strings from '../assets/strings'

const color = strings.color

const {height,width} = Dimensions.get('window')
export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {msg} = this.props
      // const custom = {top:data.top || height/2}
    return (
      <View style={[styles.container,{flexDirection:'row',height:msg ? 60 : 40 , borderRadius:msg ? 30 : 20 , width : msg ? 300 : 40}]}>
         <Spinner color={color} style={{textAlign:'center',alignSelf:'center'}}/>
         {msg ?  <Text style={{textAlign:'center',alignSelf:'center'}}> {msg} </Text> : null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {height:40,width:40,borderRadius: 20,top:height/2,alignSelf: 'center',justifyContent: 'center',
        backgroundColor: '#fff',elevation:6,position:'absolute' }
})