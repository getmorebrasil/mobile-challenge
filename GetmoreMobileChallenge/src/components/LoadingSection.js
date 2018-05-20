import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const LoadingSection = () => {
    const { containerStyle, titleStyle, textStyle } = styles;
    return(
        <View style={containerStyle}>
            <ActivityIndicator size='large' color='#404040' style={{margin: 10}}/>
            <Text style={titleStyle}>Carregando Informacoes...</Text>
            <Text style={textStyle}>Por favor aguarde</Text>
        </View>
    );
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    titleStyle: {
        fontSize: 20,
    },
    textStyle: {
        fontSize: 15
    }
}

export default LoadingSection;