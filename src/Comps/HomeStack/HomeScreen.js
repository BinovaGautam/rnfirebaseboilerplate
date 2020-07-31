import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import TabsComp from './TabsComp'

export default class HomeScreen extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    
    render() {
        return (
            <View style={{flex:1,marginTop:StatusBar.currentHeight,backgroundColor: '#fff',}} >
              <StatusBar translucent={true} backgroundColor="#fff" barStyle="dark-content"/>
                <TabsComp/>
            </View>
        )
    }
}
