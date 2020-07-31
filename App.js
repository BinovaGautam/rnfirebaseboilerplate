// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './src/Comps/AuthStack'
import HomeStack from './src/Comps/HomeStack'
import auth from '@react-native-firebase/auth';

// function HomeScreen() {
//   return (
//     <View style={{flex:1,backgroundColor: '#fff',justifyContent:'center'}}>
//        <StatusBar backgroundColor="#fff" translucent="true" barStyle = 'dark-content'/>
//        <Text style={{fontSize:24,fontWeight:'bold',letterSpacing:2,color:'#000',textAlign:'center'}}>MERAPARCEL</Text>
//      </View>
//   );
// }

const Stack = createStackNavigator();

const Splash = () => {
  return(
    <View style={{flex:1,backgroundColor: '#fff',justifyContent:'center'}}>
      <StatusBar backgroundColor="#fff" translucent={true} barStyle = 'dark-content'/>
      <Text style={{fontSize:24,fontWeight:'bold',letterSpacing:2,color:'#000',textAlign:'center'}}>PROJECT NAME</Text>
    </View>
  )
}

class App extends React.Component {

    constructor(props){
      super(props)
      this.state={}
    }

    componentDidMount() {
      // this.checkAuth()
      // auth().signOut()
      setTimeout(() => {
        this.checkAuth()
      }, 1500);
    }

    checkAuth = () => {
    let unsubs =  auth().onAuthStateChanged(user =>{
          this.setState({checked : true , user})
          // alert(JSON.stringify(user))
      })
    }
    render(){
      let {checked,user} = this.state
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown : false}} >
            {
              checked ?
              user ?(
               
                <Stack.Screen name="Home" component={HomeStack} />
               
              )
              
              :(
              <Stack.Screen name="Auth" component={AuthStack}   />
              )
              :(
              <Stack.Screen name="Splash" component={Splash} />
              )
            }
            
            
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
}

export default App;
