import * as types from './actionTypes';
import DiscApiClient from '../api/DiscApiClient';

export function getDiscSuccess(discs) {
    return { type: types.LOAD_DISC_SUCCESS, discs };
}

export function loadDiscs() {
    return function(dispatch) {
        return DiscApiClient.getDiscs().then(discs => {
            dispatch(getDiscSuccess(discs));
        }).catch(error => { 
            throw(error); 
        });
    };
}