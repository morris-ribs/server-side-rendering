import * as types from '../actions/actionTypes';

export default function discsReducer(state = {}, action) {
    switch (action.type) {
        case types.LOAD_DISC_SUCCESS:
        return action.discs;

        default: return state;
    }
    
}