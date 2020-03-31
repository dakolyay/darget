import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

// import appReducers from "./reducers";
import appReducers from './redux/reducers/index';

export default createStore(
    appReducers,
    composeWithDevTools(applyMiddleware(thunk))
);