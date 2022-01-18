import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './../reducers'

const middleware = [thunk]
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, {}, composeEnhancers(
//     applyMiddleware(...middleware)
// ));
const store = createStore(reducer, {}, applyMiddleware(...middleware))

export default store;