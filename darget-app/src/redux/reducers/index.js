import { combineReducers } from "redux";
import roomReducer from './room.reducer';


const appReducers = combineReducers({
    room: roomReducer,
});

export default appReducers;