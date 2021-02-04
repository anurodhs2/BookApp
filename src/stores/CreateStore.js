import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './../reducers'
import rootSaga from './../sagas'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
  ],
};

const middleware = [];
const enhancers = [];

// Connect the sagas to the redux store
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

enhancers.push(applyMiddleware(...middleware));

// Redux persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, compose(...enhancers));
export const persistor = persistStore(store);

// Kick off the root saga
sagaMiddleware.run(rootSaga);

