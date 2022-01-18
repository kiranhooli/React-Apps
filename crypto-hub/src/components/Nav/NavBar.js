import NavList from "./NavList"

const NavBar = () => {
    const svg = {
        dashboard: <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>,
        news: <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
        </svg>
    }

    return (
        <>
            <div className=" bg-gray-50 p-3 shadow-lg divide-y-2 lg:w-2/12">
                <div className="mb-5 mt-3">
                    <h1 className="text-2xl text-center text-green-500 font-semibold">CryptoHub</h1>
                    <p className="text-xs text-gray-700 text-center">By <a href="http://github.com/kiranhooli" className="underline cursor-pointer text-purple-900 font-semibold">Kiran Hooli.</a></p>
                </div>
                <ul className="space-y-2 text-sm pt-5">
                    <NavList label='Dashboard' svg={svg.dashboard} linkTo='/' />
                    <NavList label='News' svg={svg.news} linkTo='/news' />
                </ul>
            </div>
        </>

    )
}

export default NavBar