import * as types from '../actions/actionTypes';

export default function discReducer(state = {}, action) {
    switch (action.type) {
        case types.LOAD_DISCS_SUCCESS:
        return action.discs;

        default: return state;
    }
    
}