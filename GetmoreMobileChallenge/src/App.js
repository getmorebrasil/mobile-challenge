import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import LojasListScreen from './screens/LojasListScreen';
import LojaScreen from './screens/LojaScreen';

const Stack = createStackNavigator({
    ListaLojas : { screen: LojasListScreen },
    Loja: { screen: LojaScreen }
});

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Stack />
            </Provider>
        );
    }
}