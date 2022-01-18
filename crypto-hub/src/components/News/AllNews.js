import NewsPanelCard from './../Dashboard/NewsPanelCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllNews, fetchTopNews } from "../../actions"

const AllNews = () => {
    const dispatch = useDispatch()
    const allNews = useSelector(state => state.allNews)
    const topNews = useSelector(state => state.topNews)

    useEffect(() => {
        dispatch(fetchAllNews())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchTopNews(allNews.slice(0, 20)))
    }, [allNews, dispatch])
    return (
        <div className="p-5 divide-y-2 bg-white shadow-lg lg:w-10/12 overflow-y-scroll">
            <div className="m-6">
                <h1 className="text-md text-left text-green-500 font-semibold">All News</h1>
            </div>
            <div className="flex flex-col gap-2">
                {topNews.length > 0 ?
                    topNews.map(nws => <NewsPanelCard news={nws} key={Math.random()} contentCount={250} headSize='text-sm' />)
                    : 'No News Found.'}
            </div>
        </div>
    )
}

export default AllNews
