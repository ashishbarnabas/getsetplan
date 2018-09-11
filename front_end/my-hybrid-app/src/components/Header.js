import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { headerStyle, headerFontStyle } = styles;

    return (
        <View style={headerStyle}>
            <Text style={headerFontStyle}>{ props.heading }</Text>
        </View>
    );
};

const styles = {
    'headerStyle': {
        marginTop: 20,
        height: 60,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    'headerFontStyle': {
        fontSize: 20
    }
};

export default Header;