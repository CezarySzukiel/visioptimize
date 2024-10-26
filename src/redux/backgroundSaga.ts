import { put, takeLatest } from 'redux-saga/effects';
import { setBackgroundImageLoaded } from './actions';

export function* loadBackgroundImageSaga() {
    const imageUrl = 'https://example.com/your-image.jpg';

    try {
        const img = new Image();
        img.src = imageUrl;
        yield new Promise((resolve) => {
            img.onload = resolve;
        });
        yield put(setBackgroundImageLoaded(imageUrl));
    } catch (error) {
        console.error('Błąd ładowania obrazu tła', error);
    }
}

export function* watchLoadBackgroundImage() {
    yield takeLatest('LOAD_BACKGROUND_IMAGE', loadBackgroundImageSaga);
}