import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import persistedReducer from './root-reducer'
import rootSaga from './root.saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(persistedReducer, composeWithDevTools(
  applyMiddleware(...middlewares),
  // other store enhancers if any
))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistor }
