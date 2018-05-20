import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import LojasListScreen from './screens/LojasListScreen';

const Stack = createStackNavigator({
    ListaLojas : { screen: LojasListScreen }
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