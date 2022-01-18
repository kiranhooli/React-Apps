const selectedCoinReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SELECTED_COIN': return action.payload
        default: return state
    }
}
export default selectedCoinReducer