import { combineReducers } from 'redux';
import LojasListReducer from './LojasListReducer';

export default combineReducers({
    lista: LojasListReducer
});