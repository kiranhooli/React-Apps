const goldReducer = (state = 3, action) => {
    switch (action.type) {
        case 'ADD_GOLD':
            return state + action.payload
        default:
            return state
    }
}

export default goldReducer