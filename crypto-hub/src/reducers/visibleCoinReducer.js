const coinsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_VISIBLE_COINS': return action.payload
        default: return state
    }
}
export default coinsReducer