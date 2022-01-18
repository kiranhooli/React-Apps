import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchSelectedCoin } from '../../actions'
import Chart from './Chart'
const Coin = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const selectedCoin = useSelector(state => state.selectedCoin)

    const { name, iconUrl, price, marketCap, change, rank, sparkline, color } = selectedCoin
    const volume24h = selectedCoin['24hVolume']
    const allTimeHigh = selectedCoin?.allTimeHigh?.price.slice(0, 10)

    useEffect(() => {
        dispatch(fetchSelectedCoin(id))
    }, [dispatch, id])

    return (
        <div className="p-5 divide-y-2 bg-gray-50 lg:w-10/12 shadow-lg">
            <div className="p-5 flex flex-row gap-3 items-center">
                <img className="rounded-full" src={iconUrl} width="30" height="30" alt="icon" />
                <h1 className='text-lg lg:text-2xl font-bold'>{name} </h1>
                <h1 className='text-lg lg:text-2xl font-bold'>$ {price?.slice(0, 12)} <span className={`text-xs lg:text-sm align-top ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>{change > 0 ? `+${change}` : change}%</span></h1>
            </div>
            <div>
                <div className="p-5 flex lg:space-x-4 flex-wrap">
                    <div className="flex items-center justify-start lg:justify-around  lg:basis-1/12 p-4 bg-white w-full lg:w-64 rounded-md space-x-2 m-2 shadow-lg">
                        <div>
                            <span className="text-xs font-semibold text-gray-500">Rank</span>
                            <h1 className="text-xs lg:text-lg font-bold lg:text-right">{rank}</h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-start lg:justify-around p-4 bg-white w-full lg:w-64 rounded-md space-x-2 m-2 shadow-lg">
                        <div>
                            <span className="text-xs font-semibold text-gray-500">All Time High</span>
                            <h1 className="text-xs lg:text-lg font-bold">$ {allTimeHigh}</h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-start lg:justify-around p-4 bg-white w-full lg:w-64 rounded-md space-x-2 m-2 shadow-lg">
                        <div>
                            <span className="text-xs font-semibold text-gray-500">Market Cap</span>
                            <h1 className="text-xs lg:text-lg font-bold">$ {marketCap}</h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-start lg:justify-around p-4 bg-white w-full lg:w-64 rounded-md space-x-2 m-2 shadow-lg">
                        <div>
                            <span className="text-xs font-semibold text-gray-500">24h Volume</span>
                            <h1 className="text-xs lg:text-lg font-bold">$ {volume24h}</h1>
                        </div>
                    </div>
                </div>
                <Chart sparkline={sparkline} color={color} />
            </div>
        </ div>
    )
}

export default Coin
