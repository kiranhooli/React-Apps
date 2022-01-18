
const NavItem = ({ children, btnClass, label, icon, showForm = null }) => {

    return (
        <li className="nav__item">
            <button onClick={() => showForm()} className={"nav__btn " + btnClass}>
                <svg className="nav__icon">
                    <use href={icon}></use>
                </svg>
                <span>{label}</span>
            </button>
            {children}
        </li>
    )
}

export default NavItem
