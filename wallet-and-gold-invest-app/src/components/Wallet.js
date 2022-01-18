import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { depositeMoney } from '../actions'

const Wallet = () => {
    const [amount, setAmount] = useState('')
    const dispatch = useDispatch()
    const walletBalance = useSelector(state => state.wallet)
    const goldBalance = useSelector(state => state.gold)

    const onAmountValue = (e) => {
        e.target.value.length < 7 && setAmount(parseInt(e.target.value))
    }
    const addRecommendedAmt = (amt) => {
        setAmount(amt)
    }
    const onTopupWallet = () => {
        dispatch(depositeMoney(amount))
        setAmount('')
    }
    return (
        <div className="comp-1 flex-1 lg:mx-10">
            <div className="bg-white w-full rounded-md shadow-2xl p-8 space-y-1 divide-y-2 divide-gray-300 lg:h-96">
                <div className="flex justify-between">
                    <div className="space-y-2 mb-4">
                        <h3 className="text-sm font-medium">Wallet Balance</h3>
                        <h1 className="text-4xl font-semibold text-green-500">₹ {walletBalance}</h1>
                    </div>
                    <div className="space-y-2 mb-4">
                        <h3 className="text-sm font-medium">Gold Balance</h3>
                        <h1 className="text-4xl font-semibold text-yellow-500">{goldBalance} gms</h1>
                    </div>
                </div>
                <div className="space-y-4 relative">
                    <h3 className="text-lg font-semibold mt-3">Topup Wallet</h3>
                    <span className="w-0 h-0 text-3xl font-bold text-indigo-600 absolute inset-x-3 inset-y-10 lg:inset-x-6 lg:inset-y-12"> ₹ </span>
                    <input type="number" value={amount} onChange={onAmountValue} className="form-input text-xl focus:appearance-none lg:text-2xl font-semibold py-1 lg:py-3 px-3 pl-10 lg:pl-14 w-full rounded-md transition border-2 border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-900" />
                    <p className="text-sm">Recommended</p>
                    <div className="flex flex-row text-sm space-x-5">
                        <button onClick={() => addRecommendedAmt(100)} className="border-2 border-indigo-900 py-1 px-4 cursor-pointer hover:bg-indigo-100">₹ 100</button>
                        <button onClick={() => addRecommendedAmt(200)} className="border-2 border-indigo-900 py-1 px-4 cursor-pointer hover:bg-indigo-100">₹ 200</button>
                        <button onClick={() => addRecommendedAmt(500)} className="border-2 border-indigo-900 py-1 px-4 cursor-pointer hover:bg-indigo-100">₹ 500</button>
                    </div>
                </div>
            </div>
            <div className="">
                <button onClick={onTopupWallet} className="w-full text-md lg:text-lg inline-block bg-indigo-700 text-white hover:shadow-xl hover:-translate-y-1 transhtmlForm transition text-center py-4 rounded uppercase tracking-wider cursor-pointer">Topup Wallet</button>
            </div>
        </div>
    )
}

export default Wallet
