import icons from './../../img/icons.svg';
const RecipeIngredientsList = ({ text }) => {
    return (
        <li className="recipe__ingredient">
            <svg className="recipe__icon">
                <use href={icons + "#icon-check"}></use>
            </svg>
            <div className="recipe__description">

                {text}
            </div>
        </li>
    )
}

export default RecipeIngredientsList
