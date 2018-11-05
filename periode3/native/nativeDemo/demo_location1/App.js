/* import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hey!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

// google map.
import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';
const URL = 'http://3a88a2d5.ngrok.io/geoapi/allowedarea'; // url from ngrok

export default class App extends Component {
 state = {
   location: null,
   errorMessage: null,
 };

 componentDidMount() {
   if (Platform.OS === 'android' && !Constants.isDevice) {
     this.setState({
       errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
     });
   } else {
     this._getLocationAsync();
   }
   //const gameArea = await fetch(URL).then(res=>res.json); //+ '/geoapi/allowedarea'
   //this.setState({gameArea, res, latitude, longitude}) // property der hedder gameArea
 }

 _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       errorMessage: 'Permission to access location was denied',
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   const {latitude, longitude} =location.coords;
   this.setState({ latitude, longitude });
 };

 render() {
 

   return (
     <View style={{flex: 4}}>
     <MapView
       style={{ flex: 3 }}
       initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
       }}
     />
     <Text>{this.state.latitude}</Text>
      <Text>{JSON.stringify(this.state.gameArea)}</Text>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   paddingTop: Constants.statusBarHeight,
   backgroundColor: '#ecf0f1',
 },
 paragraph: {
   margin: 24,
   fontSize: 18,
   textAlign: 'center',
 },
}); 

