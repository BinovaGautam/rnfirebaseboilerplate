import React, { Component } from 'react'
import { Text, View, StatusBar,TextInput, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import {strings} from '../assets'
import OptComp from './OtpComp';


let {cstblue,dColor,pink} = strings

export default class HomeScreen extends Component {
        
    constructor(props){
        super(props)
        this.state = {}
    }


    sendCode = async()=>{
        let {phoneNumber} = this.state
        if(phoneNumber && phoneNumber.length == 10){
            // Send Code to phone Number and set the response as confirm 
            let confirm = await auth().signInWithPhoneNumber("+91"+phoneNumber);
            this.setState({confirm})
        }else{
            let msg = {text : "Please Enter A Valid Phone Number Before Proceeding.",type:"err"}
            this.setState({msg})
        }
    }

    confirmCode = async(code) => {
        let {confirm} = this.state
        try {
            await confirm.confirm(code);
          } catch (error) {
             Snackbar.show({
                 text:'Invalid Code',
                 duration:Snackbar.LENGTH_SHORT
             })
            console.log('Invalid code.');
          }
    }

    
    render() {
        let {phoneNumber,msg,confirm} = this.state
        return (
            <View style={{marginTop:StatusBar.currentHeight,backgroundColor: '#fff',flex:1,padding:10}}>
                <StatusBar backgroundColor="#fff" translucent={true} barStyle = "dark-content"/>
                
                {
                    !confirm ?
                    <View style={{flex:1}}>
                          <Text style={{margin:20,fontWeight:'bold',fontSize:24,letterSpacing:2}} >LogIn Via SMS </Text>
              
                        <Text style={{margin:20,marginTop:50,fontWeight:'bold',fontSize:14,letterSpacing:1}} >PHONE NUMBER </Text>

                            <View style={{height:70,margin:20,flexDirection:'row',borderRadius:5,alignItems:'center',padding:10,}}>
                                <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2}} >+91 </Text>
                                <TextInput keyboardType="numeric" autoFocus={true} maxLength={10}
                                value={phoneNumber} onChangeText={text => this.setState({phoneNumber:text,msg:null})} placeholder="phone number" underlineColorAndroid="transparent"/>
                            </View>

                            {
                                msg ? 
                                <Text style={{fontSize:14,fontWeight:'500',textAlign:'center',color:msg.type == "err" ?pink : dColor,margin:20 }}>{msg.text} </Text>
                                : null
                            }

                            <TouchableOpacity activeOpacity={0.7} onPress={this.sendCode}
                            style={{margin:20,borderRadius:5,backgroundColor: dColor,justifyContent:'center',elevation:6,height:50}}>
                                <Text style={{textAlign:'center',fontSize:14,fontWeight:'bold',textAlign:'center',color:'#fff',letterSpacing:1}}>GET VERIFICATION CODE </Text>
                            </TouchableOpacity>

                    </View>

                    :
                    <OptComp name="VERIFY" confirmCode={this.confirmCode} />
                }
            </View>
        )
    }
}
