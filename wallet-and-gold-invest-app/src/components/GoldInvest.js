import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGold, withdrawMoney } from '../actions'

const GoldInvest = () => {
    const [rupee, setRupee] = useState('')
    const [grams, setGrams] = useState('')
    const dispatch = useDispatch()
    const remainingBalance = useSelector(state => state.wallet)

    const onGoldAmountChange = (e) => {
        if (e.target.value.length > 6) {
            return
        }
        else if (e.target.value === '') {
            setRupee('')
            setGrams('')
        } else {
            setRupee(parseInt(e.target.value))
            setGrams(e.target.value / 5000);
        }
    }
    const onGoldGramsChange = (e) => {
        if (e.target.value.length > 6 || parseFloat(e.target.value) > 100) {
            return
        }
        else if (e.target.value === '') {
            setRupee('')
            setGrams('')
        } else {
            setGrams(parseInt(e.target.value))
            setRupee(e.target.value * 5000)
        }
    }
    const addGoldToWallet = () => {
        if (remainingBalance < parseInt(rupee)) {
            alert('Low Balance')
        } else {
            console.log(parseFloat(grams))
            dispatch(addGold(parseFloat(grams)))
            dispatch(withdrawMoney(parseInt(rupee)))
            setRupee('')
            setGrams('')
        }

    }

    return (
        <div className="comp-2 py-10 flex-1 lg:mx-10 lg:py-0">
            <div className="bg-white w-full rounded-md shadow-2xl p-8 space-y-1 divide-y-2 divide-gray-300 lg:space-y-5 lg:h-96">
                <div className="lg:flex lg:justify-between lg:items-center lg:pb-8">
                    <h2 className="text-lg font-semibold lg:text-2xl">Invest in Gold</h2>
                    <h3 className="text-base font-bold mt-1 lg:text-xl">Price: ₹<span>4989.345</span> /gm</h3>
                </div>
                <div className="pt-3 lg:pt-8">
                    {/* <div className="flex items-center flex-row mt-1">
                        <input type="radio"  name="buyIn" id="inRupee" value="inRupee" className={`form-radio cursor-pointer text-indigo-500 border-2 w-5 h-5 focus:ring-1 focus:ring-indigo-600 lg:w-6 lg:h-6`} />
                        <label htmlFor="inRupee" className="text-sm font-medium pl-2 cursor-pointer lg:text-md">Buy in Rupee</label>
                        <input type="radio"  name="buyIn" id="inGrams" value="inGrams" className={`ml-6 form-radio cursor-pointer text-indigo-500 border-2 w-5 h-5 focus:ring-1 focus:ring-indigo-600 lg:w-6 lg:h-6`} />
                        <label htmlFor="inGrams" className="text-sm pl-2 font-medium cursor-pointer lg:text-md">Buy in Grams</label>
                    </div> */}
                    <div className="">
                        <input type="number" maxLength='6' onChange={onGoldAmountChange} value={rupee} className={` disabled:bg-gray-200 disabled:cursor-not-allowed text-right mt-8 text-2xl font-semibold py-1 lg:py-3 px-3 w-9/12 lg:w-10/12 rounded-md transition border-2 border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-900`} />
                        <span className="py-1 px-3 lg:text-3xl font-bold text-indigo-600">₹</span>
                        <input type="number" maxLength='6' onChange={onGoldGramsChange} value={grams} className={` text-right mt-8 text-2xl font-semibold py-1 lg:py-3 disabled:bg-gray-200 disabled:cursor-not-allowed px-3 w-9/12 lg:w-10/12 rounded-md transition border-2 border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-900`} />
                        <span className="py-1 px-3 lg:text-3xl font-bold text-indigo-600">gms</span>
                    </div>
                </div>
            </div>
            <div className="">
                <button onClick={addGoldToWallet} className="w-full text-md lg:text-lg inline-block bg-indigo-700 text-white hover:shadow-xl hover:-translate-y-1 transform transition text-center py-4 rounded uppercase tracking-wider cursor-pointer">Buy</button>
            </div>
        </div>
    )
}

export default GoldInvest
