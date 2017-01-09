import {combineReducers} from 'redux';
import discs from './discsReducer';

const rootReducer = combineReducers({
    discs
});

export default rootReducer;