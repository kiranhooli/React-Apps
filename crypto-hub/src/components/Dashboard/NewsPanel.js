import { Link } from "react-router-dom"
import NewsPanelCard from "./NewsPanelCard"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllNews, fetchTopNews } from "../../actions"

const NewsPanel = () => {
    const dispatch = useDispatch()
    const allNews = useSelector(state => state.allNews)
    const topNews = useSelector(state => state.topNews)

    useEffect(() => {
        dispatch(fetchAllNews())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchTopNews(allNews.slice(0, 3)))
    }, [allNews, dispatch])
    return (
        <div className=" p-5 divide-y-2 bg-gray-50 shadow-lg lg:w-3/12">
            <div className="m-6">
                <h1 className="text-md text-left text-green-500 font-semibold">News</h1>
            </div>
            <div className="flex flex-col gap-2 pt-5">
                {topNews.length > 0 ?
                    topNews.map(nws => <NewsPanelCard news={nws} key={Math.random()} />)
                    : 'No News Found.'}
                <p className="text-sm text-center underline cursor-pointer p-2 text-green-500">
                    <Link to='/news'>
                        Show all news
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default NewsPanel
