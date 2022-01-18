const RecipeInfo = ({ children, label, cssClass, icon }) => {
    return (
        <div className="recipe__info">
            <svg className="recipe__info-icon">
                <use href={icon}></use>
            </svg>
            <span className={"recipe__info-data " + cssClass}>45</span>
            <span className="recipe__info-text">{label}</span>
            {children}
        </div>
    )
}

export default RecipeInfo
