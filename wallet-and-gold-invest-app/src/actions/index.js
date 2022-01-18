export const depositeMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'DEPOSITE',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'WITHDRAW',
            payload: amount
        })
    }
}

export const addGold = (goldAmt) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_GOLD',
            payload: goldAmt
        })
    }
}



