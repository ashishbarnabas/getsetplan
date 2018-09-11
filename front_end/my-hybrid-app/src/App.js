/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './components/Header';
import ListResult from './components/ListResults';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
            <Header heading={'GSP Results'}/>
            <ListResult />
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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



// import React, { Component } from 'react';
// import { View, Text, ImageBackground, StyleSheet } from 'react-native';

// class App extends Component {
//   render() {
//     return (

//       <ImageBackground source={require('./img/homeBgDemo.jpg')} imageStyle={{resizeMode: 'cover'}} style={styles.backgroundImage} >

//         <View style={styles.app}>

//           <View style={styles.appHeader}>
//               <Text style={styles.appTitle}> App Header </Text>
//           </View>

//           <View style={styles.appIntro}>
//               <Text style={styles.simpleText}> Hello World! </Text>
//               <Text style={styles.simpleText}> This is my first App! </Text>
//           </View>

//         </View>

//       </ImageBackground>

//     );
//   }
// }

// export default App;

// const styles = StyleSheet.create({
  
//   backgroundImage: {
//         flex: 1
//   },
//   app: {
//     flex: 1
//   },
//   appHeader: {
//     backgroundColor: 'rgba(52, 52, 52, 0.8)',
//     textAlign: 'center',
    
//   },
//   appTitle: {
//     fontSize: 32,
//     color: 'white'
//   },
//   appIntro: {
//     flex: 3
//   },
//   simpleText: {
//     flex: 1,
//     fontSize: 16,
//     textAlign: 'center',
//     color: 'white',
//     padding: 20
//   }
// })


