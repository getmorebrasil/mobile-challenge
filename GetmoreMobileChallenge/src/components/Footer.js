import React from 'react';
import { View, Text } from 'react-native';

const Footer = (props) => {
    const { containerStyle, textStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{props.label}</Text>
        </View>
    );
}

const styles = {
    containerStyle: {
        backgroundColor: '#404040',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
    },
    textStyle: {
        fontSize: 15,
        color: '#e6e6e6'
    }
}

export default Footer;