import icons from './../../img/icons.svg';
import logo from './../../img/logo.png'

import { useDispatch } from 'react-redux'
import { showForm } from "./../../actions"

import Search from './Search'
import NavBar from './NavBar';
import NavItem from './NavItem'
import BookmarkList from './BookmarkList';
import Bookmark from './Bookmark';

const Header = ({ }) => {
    const dispatch = useDispatch()
    const showFormFlag = () => {
        dispatch(showForm())
    }
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="header__logo" />
            <Search />
            <NavBar>
                <NavItem btnClass='nav__btn--add-recipe' label='Add recipe' icon={icons + "#icon-edit"} showForm={showFormFlag} />
                <NavItem btnClass='nav__btn--bookmarks' label='Bookmarks' icon={icons + "#icon-bookmark"} >
                    <BookmarkList>
                        <Bookmark />
                    </BookmarkList>
                </NavItem>
            </NavBar>
        </header >
    )
}

export default Header
