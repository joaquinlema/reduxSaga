import { all } from 'redux-saga/effects';
import heroes from './heroes';

//permite ejecutar los watchers de todas las sagas
export default function* rootSaga() {
    yield all([
        heroes(),
        // laotrasaga
    ]);
}