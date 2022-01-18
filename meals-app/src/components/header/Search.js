import icons from './../../img/icons.svg';
import { useDispatch } from 'react-redux'
import { fetchRecipes } from './../../actions';
import { useState } from 'react'
const Search = () => {
    const dispatch = useDispatch()
    const [searchKey, setSearchKey] = useState('')
    return (
        <form className="search">
            <input
                type="text"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                className="search__field"
                placeholder="Search over 1,000,000 recipes..."
            />
            <button onClick={() => dispatch(fetchRecipes(searchKey))} type='button' className="btn search__btn">
                <svg className="search__icon">
                    <use href={icons + "#icon-search"}></use>
                </svg>
                <span>Search</span>
            </button>
        </form>
    )
}

export default Search
