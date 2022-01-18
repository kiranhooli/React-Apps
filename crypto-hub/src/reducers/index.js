import coinsReducer from './coinsReducer'
import visibleCoinsReducer from './visibleCoinReducer'
import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import topNewsReducer from './topNewsReducer'
import selectedCoinReducer from './selectedCoinReducer'

const reducers = combineReducers({
    allCoins: coinsReducer,
    visibleCoins: visibleCoinsReducer,
    allNews: newsReducer,
    topNews: topNewsReducer,
    selectedCoin: selectedCoinReducer,
})

export default reducers