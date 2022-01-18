import icons from './../../img/icons.svg';

import RecipeDirections from './RecipeDirections';
import RecipeHeader from './RecipeHeader';
import RecipeIngredients from './RecipeIngredients';
import RecipeIngredientsList from './RecipeIngredientsList';
import { fetchRecipe } from './../../actions'

import { useSelector } from 'react-redux'

const Recipe = () => {
  const recipe = useSelector(state => state.selectedRecipe)

  return (
    < div className="recipe">
      {!(recipe.length > 0) ? <div className="message">
        <div>
          <svg>
            <use href={icons + "#icon-smile"}></use>
          </svg>
        </div>
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div> :
        <>
          <RecipeHeader />
          <RecipeIngredients >
            {recipe[0].ingredients?.length && recipe[0].ingredients?.map(ing => <RecipeIngredientsList key={ing} text={ing} />)}
          </RecipeIngredients>
          <RecipeDirections />
        </>
      }
      {/* <div className="spinner">
        <svg>
          <use href={icons + "#icon-loader"}></use>
        </svg>
      </div> */}
      {/* <!-- <div className="error">
            <div>
              <svg>
                <use href={icons + "#icon-alert-triangle"}></use>
              </svg>
            </div>
            <p>No recipes found for your query. Please try again!</p>
          </div> --> */}

    </div >
  )
}

export default Recipe
