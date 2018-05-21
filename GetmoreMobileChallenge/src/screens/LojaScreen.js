import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import LoadingSection from '../components/LoadingSection';
import Footer from '../components/Footer';
import LojaInfo from '../components/LojaInfo';

class LojaScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
            title: params ? `${params.loja[1]}` : 'Loja',
            headerStyle: {
            backgroundColor: '#404040',
            },
            headerTintColor: '#e6e6e6',
        }
    };

    componentWillMount() {

        fetch(`http://challenge.getmore.com.br/stores/${this.props.selectedId}`)
            .then(response => response.json())
            .then(loja => this.props.getLojaInfo(loja));

            this.props.navigation.setParams({loja: this.props.selectedId});

    }

    renderLoja() {
        if (this.props.selectedLoja === null) {
            return <LoadingSection />
        }
        
        return <LojaInfo loja={this.props.selectedLoja} />;
    }

    renderCategory() {
        if (this.props.selectedLoja !== null) {
            const categorias = this.props.selectedLoja.category.map(
                (categoria,ind) => <Text key={ind}>{categoria}</Text>);
            return categorias;
        }
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        {this.renderLoja()}
                    </View>
                    <View style={categoriasStyle}>
                        <Text style={{alignSelf: 'flex-start', fontSize: 20, marginBottom: 10}}>Categorias: </Text>
                        {this.renderCategory()}
                    </View>
                </ScrollView>
                <Footer 
                    label={'Clicar em "Visitar o site" abrira seu browser'}
                    style={{position: 'absolute', bottom: 0}}
                />
            </View>
        );
    }
}

const categoriasStyle = {
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
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, actions) (LojaScreen);