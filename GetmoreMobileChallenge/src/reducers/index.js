import { combineReducers } from 'redux';
import LojasListReducer from './LojasListReducer';
import IdReducer from './IdReducer';

export default combineReducers({
    lista: LojasListReducer,
    SelectedId: IdReducer
});