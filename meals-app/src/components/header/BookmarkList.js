import icons from './../../img/icons.svg';
const BookmarkList = ({ children }) => {
    return (
        <div className="bookmarks">
            <ul className="bookmarks__list">
                {!children ?
                    <div className="message">
                        <div>
                            <svg>
                                <use href={icons + "#icon-smile"}></use>
                            </svg>
                        </div>
                        <p>
                            No bookmarks yet. Find a nice recipe and bookmark it :)
                        </p>
                    </div> :
                    children
                }
            </ul>
        </div>
    )
}

export default BookmarkList
