const newsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_NEWS': return action.payload
        default: return state
    }
}
export default newsReducer