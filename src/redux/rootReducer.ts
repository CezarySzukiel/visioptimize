import { combineReducers } from '@reduxjs/toolkit';
import backgroundReducer from './backgroundReducer'; // plik z reducerem obrazu tła

const rootReducer = combineReducers({
    background: backgroundReducer, // dodaj inne reducery w ten sam sposób
});

export default rootReducer;