import * as types from './actionTypes';
import DiscApiClient from '../api/DiscApiClient';

export function getDiscSuccess(discs) {
    return { type: types.LOAD_DISCS_SUCCESS, discs };
}

export function loadDisc() {
    return function(dispatch) {
        return DiscApiClient.getCandidate().then(discs => {
            dispatch(getDiscSuccess(discs));
        }).catch(error => { 
            throw(error); 
        });
    };
}