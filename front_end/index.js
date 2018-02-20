import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header'

const App = () => {
    return (
        <Header heading={'GSP Results'}/>
    );
};

AppRegistry.registerComponent('front_end', () => App);
