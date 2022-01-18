const NavBar = ({ children }) => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {children}
            </ul>
        </nav>
    )
}

export default NavBar
