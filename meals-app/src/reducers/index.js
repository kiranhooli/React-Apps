import { combineReducers } from 'redux'
import formReducer from './formReducer'
import recipeReducer from './recipeReducer';
import recipesReducer from './recipesReducer';
const reducers = combineReducers({
    showForm: formReducer,
    selectedRecipe: recipeReducer,
    allRecipes: recipesReducer
})

export default reducers;