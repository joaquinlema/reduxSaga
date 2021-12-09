import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from './actions/sagas';
import { hereoReducer } from './reducers/heroes';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    hereoReducer: hereoReducer
});

const sagaMiddleware = reduxSaga();

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

// ejecuta las sagas del proyecto
sagaMiddleware.run(rootSaga);