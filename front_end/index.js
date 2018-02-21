import React from 'react';
import { Text, View, AppRegistry, ListView } from 'react-native';
import Header from './src/components/Header'
import ListResult from './src/components/ListResults'

const App = () => {
    return (
        <View style={{flex:1}}>
            <Header heading={'GSP Results'}/>
            <ListResult />
        </View>
    );
};

AppRegistry.registerComponent('front_end', () => App);
