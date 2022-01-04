//상태관리 redux사용. 여기서 모든 상태값을 저장한다.

import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'

import createRootReducer from './redux/reducers'
import rootSaga from './redux/sagas'

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const middlewares = [sagaMiddleware, routerMiddleware(history)];
// 개발중 상태를 확인가능
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancer = process.env.NODE_ENV == "prod"? compose:devtools || compose;

const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancer(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(rootSaga);

export default store;