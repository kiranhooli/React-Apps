import icons from './../../img/icons.svg';
import { useDispatch } from 'react-redux'
import { fetchRecipe } from './../../actions'

const SearchList = ({ recipe }) => {
    const { image_url, title, publisher, recipe_id } = recipe
    const dispatch = useDispatch()
    const selectRecipe = (e) => {
        e.preventDefault()
        dispatch(fetchRecipe(recipe_id))
    }
    return (
        <li className="preview">
            <a className="preview__link preview__link--active" href="/" onClick={(e) => selectRecipe(e)}>
                <figure className="preview__fig">
                    <img src={image_url} alt="Test" />
                </figure>
                <div className="preview__data">
                    <h4 className="preview__title">{title}</h4>
                    <p className="preview__publisher">{publisher}</p>
                    <div className="preview__user-generated">
                        <svg>
                            <use href={icons + "#icon-user"}></use>
                        </svg>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default SearchList
