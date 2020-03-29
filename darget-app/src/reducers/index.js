import { combineReducers } from "redux";
import roomReducer from './room.Reducer';

const appReducer = combineReducers({
    room: roomReducer,
});

export default appReducer;