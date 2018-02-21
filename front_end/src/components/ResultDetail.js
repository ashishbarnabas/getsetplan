import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const ResultDetail = (props) => {
    const { imageStyle, textStyle, mainImageStyle } = styles;
    const { thumbnail_image, title, artist, image } = props.itenary;
    return (
        <Card>
            <CardSection>
                <Image style={imageStyle} source={{ uri: thumbnail_image}} />
                <View style={textStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
            <Image style={mainImageStyle} source={{ uri: image}} />
            </CardSection>
        </Card>
    );
};

const styles = {
    imageStyle: {
        width:50,
        height:50
    },
    textStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    mainImageStyle: {
        height:300,
        flex: 1,
        width: null
    }
};

export default ResultDetail;