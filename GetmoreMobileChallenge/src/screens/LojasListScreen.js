import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import * as actions from '../actions';
import LoadingSection from '../components/LoadingSection';

class LojasListScreen extends Component {
    static navigationOptions = {
        title: 'Lojas',
        headerStyle: {
            backgroundColor: '#404040',
        },
        headerTintColor: '#e6e6e6',
    };

    componentWillMount() {

        fetch(`http://challenge.getmore.com.br/stores`)
            .then(response => response.json())
            .then(lojas => this.props.getLista(lojas));
    }

    renderList() {
        if (this.props.lista === null) {
            return <LoadingSection />
        }

        
    }
  

    render() {
        console.log(this.props);
        return (
            <ScrollView style={{flex: 1}}>
            {this.renderList()}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, actions) (LojasListScreen);