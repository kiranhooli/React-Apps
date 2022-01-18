const RecipeIngredients = ({ children }) => {
    return (
        <div className="recipe__ingredients">
            <h2 className="heading--2">Recipe ingredients</h2>
            <ul className="recipe__ingredient-list">
                {children}
            </ul>
        </div>
    )
}

export default RecipeIngredients
