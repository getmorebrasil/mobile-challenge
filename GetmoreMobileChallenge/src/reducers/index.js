import { combineReducers } from 'redux';
import LojasListReducer from './LojasListReducer';
import IdReducer from './IdReducer';
import LojaInfoReducer from './LojaInfoReducer';

export default combineReducers({
    lista: LojasListReducer,
    selectedId: IdReducer,
    selectedLoja: LojaInfoReducer
});