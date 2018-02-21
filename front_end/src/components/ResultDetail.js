import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const ResultDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.imageStyle}>
                </View>
                <View style={styles.textStyle}>
                    <Text>{props.itenary.title}</Text>
                    <Text>{props.itenary.artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    imageStyle: {

    },
    textStyle: {
        flexDirection: 'column'
    }
};

export default ResultDetail;