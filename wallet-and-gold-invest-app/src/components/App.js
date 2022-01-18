import React from 'react'
import Wallet from './Wallet'
import GoldInvest from './GoldInvest'

const App = () => {

    return <>
        <div>
            <div className="bg-gray-100 p-10 lg:px-20">
                <h1 className="text-4xl font-extrabold text-yellow-500 uppercase lg:text-5xl">Gold<span className="text-indigo-700">.</span></h1>
            </div>
            <div className="min-h-screen bg-gray-100 px-6 flex flex-col lg:flex-row">
                <Wallet />
                <GoldInvest />
            </div>
        </div>
    </>
}

export default App