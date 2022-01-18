import { useNavigate } from 'react-router-dom'
const CoinRow = ({ coin }) => {
    const { name, price, change, marketCap, iconUrl, symbol, uuid } = coin
    const navigate = useNavigate()

    return (
        <tr className="hover:shadow-md duration-200 transform transition cursor-pointer" onClick={() => navigate(`/coin/${uuid}`)}>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 ">
                        <img className="rounded-full" src={iconUrl} width="30" height="30" alt="Alex Shatov" />
                    </div>
                    <div className="font-medium text-gray-800">{name}</div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap ">
                <div className="text-right">${price}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className={`text-right ${change > 0 ? "text-green-500" : "text-red-500"}`}>{change > 0 ? `+${change}` : change}%</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-right">${marketCap}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-center">{symbol}</div>
            </td>
        </tr >
    )
}

export default CoinRow
