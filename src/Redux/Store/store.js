//import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import root_reducer from '../Reducer/root_reducer';
import saga from '../Saga/saga';
import createSagaMiddleware from 'redux-saga'

//const store = createStore(root_reducer)
const sagaMiddleware = createSagaMiddleware()
const store=configureStore({
    reducer:root_reducer,
    middleware:()=>[sagaMiddleware]
})
sagaMiddleware.run(saga);
export default store;