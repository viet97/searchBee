import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import reducers, { listReducer } from '../reducers';
const { useLoggerRedux } = require('../config/env')

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['User'],
};

const middleware = [];

middleware.push(thunk);
useLoggerRedux && middleware.push(logger);

const store = createStore(
  persistReducer(persistConfig, reducers),
  { ...listReducer },
  applyMiddleware(...middleware),
);

const persistor = persistStore(store);

export default () => {
  return { store, persistor };
};
