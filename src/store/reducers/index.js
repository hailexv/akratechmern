import {combineReducers} from 'redux';
import contact from './contact/contact.reducer';


const createReducer = () =>
    combineReducers({
        contact
    });

export default createReducer;