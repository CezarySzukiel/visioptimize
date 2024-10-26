import { combineReducers } from '@reduxjs/toolkit';
import backgroundReducer from './backgroundReducer'; // plik z reducerem obrazu tła

export interface RootState {
    background: {
        backgroundImageUrl: string | null;
    };
}

const rootReducer = combineReducers({
    background: backgroundReducer, // dodaj inne reducery w ten sam sposób
});

export default rootReducer;