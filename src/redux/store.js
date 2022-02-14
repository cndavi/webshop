import { createStore, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const initialState = {}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  devToolsEnhancer(applyMiddleware(...middleware))
)

export default store
