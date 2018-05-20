import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const LojaParaLista = (props) => {
    const { containerStyle, imageStyle, titleStyle, textStyle } = styles;
    
    return (
        <TouchableOpacity  
            style={containerStyle}
            onPress={() => props.onPress(props.loja.id)}
        >
            <Text style={titleStyle}>{props.loja.name}</Text>
            <Image
                style={imageStyle}
                source={{uri: props.loja.image_blob}}
            />
            <Text style={textStyle}>Takeback: {props.loja.takeback.toFixed(2)}%</Text>
        </TouchableOpacity>
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
        fontSize: 25,
        color: '#404040'
    },
    textStyle: {
        fontSize: 25,
        color: '#404040'
    },
    buttonStyle: {

    }
}

export default LojaParaLista;