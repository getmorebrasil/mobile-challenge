import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

class LojasListScreen extends Component {
    static navigationOptions = {
        title: 'Lojas',
        headerStyle: {
            backgroundColor: '#e6e6e6',
        },
        headerTintColor: '#404040',
    };

    render() {
        return (
            <View>
            </View>
        );
    }
}

export default connect(null) (LojasListScreen);