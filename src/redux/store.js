import { applyMiddleware, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const middleware = []

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export const store = createStore(
  rootReducer,
  devToolsEnhancer(applyMiddleware(...middleware))
)
