export const showForm = () => (dispatch) => {
    dispatch({
        type: 'SHOW_FORM'
    })
}

export const hideForm = () => (dispatch) => {
    dispatch({
        type: 'HIDE_FORM'
    })
}

export const fetchRecipe = (id) => async (dispatch) => {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    const data = await res.json()
    dispatch({
        type: 'FETCH_RECIPE',
        payload: data.recipe
    })
}

export const fetchRecipes = (searchKey) => async (dispatch) => {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchKey}`)
    const data = await res.json()
    dispatch({
        type: 'FETCH_RECIPES',
        payload: data.recipes
    })
}