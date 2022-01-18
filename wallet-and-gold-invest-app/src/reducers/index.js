import { combineReducers } from 'redux'
import walletReducer from './walletReducer'
import goldReducer from './goldReducer'

const reducers = combineReducers({
    wallet: walletReducer,
    gold: goldReducer
})

export default reducers