const Bookmark = () => {
    return (
        <li className="preview">
            <a className="preview__link" href="#23456">
                <figure className="preview__fig">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWYUu47WYI1BcjMur7jnpCmYV6grmQBYZ6w&usqp=CAU" alt="Test" />
                </figure>
                <div className="preview__data">
                    <h4 className="preview__name">
                        Pasta with Tomato Cream ...
                    </h4>
                    <p className="preview__publisher">The Pioneer Woman</p>
                </div>
            </a>
        </li>
    )
}

export default Bookmark
