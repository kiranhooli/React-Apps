import SearchItem from './SearchItem';
import { useSelector } from 'react-redux'

const SearchResults = () => {
    const recipes = useSelector(state => state.allRecipes)
    return (
        <div className="search-results">
            <ul className="results">
                {recipes.map(recipe => <SearchItem key={recipe.recipe_id} recipe={recipe} />)}
            </ul>

            {/* <div className="pagination">
                <button className="btn--inline pagination__btn--prev">
                    <svg className="search__icon">
                        <use href={icons + "#icon-arrow-left"}></use>
                    </svg>
                    <span>Page 1</span>
                </button>
                <button className="btn--inline pagination__btn--next">
                    <span>Page 3</span>
                    <svg className="search__icon">
                        <use href={icons + "#icon-arrow-right"}></use>
                    </svg>
                </button>
            </div> */}
        </div>
    )
}

export default SearchResults
