import { useSelector } from 'react-redux'
const RecipeHeader = () => {
    const { image_url, title } = useSelector(state => state.selectedRecipe[0])
    return (
        <figure className="recipe__fig">
            <img src={image_url} alt="recipe Image" className="recipe__img" />
            <h1 className="recipe__title">
                <span>{title}</span>
            </h1>
        </figure>
    )
}

export default RecipeHeader
