import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const rooms = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ACTION_GET_ROOMS_SUCCESS:
            return action.rooms;
        case actionTypes.ACTION_GET_ROOMS_STARTED:
        case actionTypes.ACTION_GET_ROOMS_FAILED:
            return [];
        default:
            return state;
    }
}


const roomReducer = combineReducers({
    rooms
});

export default roomReducer;