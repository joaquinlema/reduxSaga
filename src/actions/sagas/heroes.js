import { put, call, takeLatest } from 'redux-saga/effects';
import { types } from '../../const/types';
import { apiCall } from '../api';

export function* getHeroes({ payload }) {
    try {

        console.log('escuchamos la llamada de heroes');
        const { results } = yield call(apiCall, 'GET', types.GET_HEROES_API);

        console.log('guardamos los heroes');
        yield put({ type: types.SET_HEROES, payload: results });
    } catch (error) {
        const errorMsj = `Error en api: ${error}`;
        yield put({ type: types.SET_ERROR, errorMsj });
    }
}

export function* postHeroes({ payload }) {
    try {

        console.log('escuchamos la llamada de heroes');
        const { results } = yield call(apiCall, 'GET', types.GET_HEROES_API);

        console.log('guardamos los heroes');
        yield put({ type: types.SET_HEROES, payload: results });
    } catch (error) {
        const errorMsj = `Error en api: ${error}`;
        yield put({ type: types.SET_ERROR, errorMsj });
    }
}

//watcher de redux saga
//toma como parametro la nombre de la accion que se ejecuta y el metodo a ejecutar
export default function* heroes() {
    yield takeLatest(types.GET_HEREOS, getHeroes);
    yield takeLatest(types.GET_HEREO_BY_ID, postHeroes);
}
