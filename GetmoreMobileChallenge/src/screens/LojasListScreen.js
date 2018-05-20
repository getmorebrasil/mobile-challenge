import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import * as actions from '../actions';
import LoadingSection from '../components/LoadingSection';
import LojaParaLista from '../components/LojaParaLista';
import Footer from '../components/Footer';

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

        const lojas = [];
        for (const loja of this.props.lista) {
            lojas.push(<LojaParaLista key={loja.id} loja={loja} onPress={this.onPressLoja.bind(this)}/>);
        }

        return lojas;
    }

    onPressLoja(id) {
        this.props.getID(id);
        this.props.navigation.navigate('Loja');
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    {this.renderList()}
                </ScrollView>
                <Footer 
                    label={'Aperta na loja para ver mais'}
                    style={{position: 'absolute', bottom: 0}}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, actions) (LojasListScreen);