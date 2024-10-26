import { all } from 'redux-saga/effects';
import { loadBackgroundImageSaga } from './backgroundSaga';

export default function* rootSaga() {
    yield all([
        loadBackgroundImageSaga(), // dodaj inne sagas w ten sposób
    ]);
}