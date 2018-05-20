import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const LojaInfo = (props) => {
    const { containerStyle, imageStyle, titleStyle, textStyle, buttonStyle, buttonText, ratingStyle } = styles;
    
    return (
        <View style={containerStyle}>
        <Text style={ratingStyle}>rating: {props.loja.rating}</Text>
            <Text style={titleStyle}>{props.loja.name}</Text>
            <Image
                style={imageStyle}
                source={{uri: props.loja.image_blob}}
            />
            <Text style={textStyle}>Takeback: {props.loja.takeback.toFixed(2)}%</Text>
            <TouchableOpacity style={buttonStyle}>
                <Text style={buttonText}>Visitar o site</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    containerStyle: {
        backgroundColor: 'white',
        margin: 30,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.4
    },
    imageStyle: {
        margin: 10,
        width: 200,
        height: 100
    },
    titleStyle: {
        fontSize: 40,
        color: '#404040'
    },
    textStyle: {
        fontSize: 30,
        color: '#404040'
    },
    buttonStyle: {
        margin: 10,
        padding: 15,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#404040',
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.4        
    },
    buttonText: {
        color: '#e6e6e6',
        fontSize: 17,
    },
    ratingStyle: {
        alignSelf: 'flex-end'
    }
}

export default LojaInfo;