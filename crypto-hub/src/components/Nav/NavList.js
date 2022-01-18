import { Link } from 'react-router-dom'

const NavList = ({ label, svg, linkTo }) => {
    return (
        <Link to={linkTo}>
            <li>
                <p className="flex items-center space-x-3 text-gray-700 p-2 font-semibold rounded-lg hover:bg-green-100 focus:bg-green-100 focus:shadow-outline">
                    <span className="text-gray-600">
                        {svg}
                    </span>
                    <span>
                        {label}
                    </span>
                </p>
            </li>
        </Link >
    )
}

export default NavList
