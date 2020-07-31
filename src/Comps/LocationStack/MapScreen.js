import React, { Component } from 'react'
import { Text, View ,StyleSheet,Dimensions, StatusBar,PermissionsAndroid,Image} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { Loader } from '../assets';

 let {width,height} = Dimensions.get('screen')
//  let hasPermission = PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATOIN

export default class MapScreen extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.reqPermission()
   
  }

   reqPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Meraparcel Needs To Access Your Locaton",
          message:
            "Please Grant Permission To Use GPS " +
            "Make Sure To Turn On The GPS",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.getCurrLoc()
      } else {
        alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  


  getCurrLoc = () => {
    Geolocation.getCurrentPosition(pos => {
       
       let {longitude,latitude} = pos.coords
       let region  = { latitude,longitude, latitudeDelta: 0.015, longitudeDelta: 0.0121}
       this.setState({region,fetched:true})
      //  alert(JSON.stringify(region))
     },err => {
       this.state({fetched : true})
       alert('Porblem finding your location')
     },{
       enableHighAccuracy : true,
       timeout : 10000,
       maximumAge: 100000
     })
  }


  render() {
    let {region,fetched} = this.state
    return (
      <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="#fff" barStyle="dark-content"/>
       
       {
         fetched ? 
         region ?
         <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={region}  >
            <Marker coordinate={region} >
              <View style={{backgroundColor: "transparent", borderRadius:10}}>
                <Image source={require('../assets/Images/logo.png')} style={{width:20,height:20,justifyContent:'center'}}/>
              </View>
            </Marker>

           
        </MapView>
        :
        <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold',color:'#000'}}>Not Able To Fetch Location!!</Text>
        :
        <Loader/>

       }

            <View style={{height:200,backgroundColor: '#fff',marginTop: 50, borderRadius:5,position:'absolute',bottom:0,left:0,right:0,padding:8}}>
              <Text> Here we go</Text>
            </View>
   </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });