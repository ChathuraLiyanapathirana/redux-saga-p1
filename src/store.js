import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './reducers/root-reducer';
import rootSaga from './saga/root-saga';

const sagaMiddleWare = createSagaMiddleWare();
const midlleware = [sagaMiddleWare];

const store = createStore(rootReducer, applyMiddleware(...midlleware));

sagaMiddleWare.run(rootSaga);

export default store;
