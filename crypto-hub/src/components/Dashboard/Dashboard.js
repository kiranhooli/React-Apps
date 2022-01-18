import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllCoins, fetchVisibleCoins } from './../../actions'
import CoinRow from './CoinRow'

const Dashboard = () => {
    const [searchKey, setSearchKey] = useState('')
    const coins = useSelector(state => state.allCoins)
    const visibleCoins = useSelector(state => state.visibleCoins)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllCoins())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchVisibleCoins(coins.slice(0, 6)))
    }, [coins, dispatch])

    const filterCoins = (e) => {
        setSearchKey(e.target.value)
        if (!e.target.value) {
            dispatch(fetchVisibleCoins(coins.slice(0, 6)))
        } else {
            const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(searchKey.toLowerCase()))
            dispatch(fetchVisibleCoins(filteredCoins.slice(0, 6)))
        }

    }

    return (
        <>
            <div className=" p-5 divide-y-2 bg-gray-50 shadow-lg lg:w-7/12">
                <div className="m-6">
                    <h1 className="text-md text-left text-green-500 font-semibold">Dashboard</h1>
                </div>
                <section className="antialiased text-gray-600 h-screen m-1 pt-10">
                    <div className="flex flex-col justify-center h-full">
                        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                            <div className="p-3">
                                <div className="">
                                    <div className="flex items-center mx-auto p-2 space-x-2 lg:space-x-20 bg-white rounded-xl ">
                                        <div className="flex bg-gray-100 p-2 w-screen lg:space-x-4 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            <input value={searchKey} onChange={(e) => filterCoins(e)} className="bg-gray-100 outline-none text-sm" type="text" placeholder="Search all cryptos.." />
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full my-2">
                                        <thead className="text-xs uppercase text-gray-400 bg-gray-50">
                                            <tr>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className=" text-center">Name</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className=" text-center">Price</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className=" text-center">Change</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className=" text-center">Market Cap</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className=" text-center">Symbol</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-xs divide-y divide-gray-100">
                                            {visibleCoins.length > 0 ? visibleCoins.map(coin => <CoinRow key={coin.uuid} coin={coin} />) : <tr><td>No coins found</td></tr>}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Dashboard
