const recipesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_RECIPES': return action.payload.slice(0, 12)
        default: return state
    }
}

export default recipesReducer
