import { collection, serverTimestamp, addDoc, query, limit, orderBy } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, db } from './../firebase'
import { useState, useRef } from 'react'
import Message from './Message'

import SignOut from './SignOut'
const ChatRoom = () => {
    const messagesRef = collection(db, "messages")
    const q = query(messagesRef, orderBy("createdAt"), limit(25));

    const [messages] = useCollectionData(q, { idField: 'id' });
    const [formVal, setFormVal] = useState('')
    const dummy = useRef()

    const [user] = useAuthState(auth)

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await addDoc(messagesRef, {
            text: formVal,
            createdAt: serverTimestamp(db),
            uid,
            photoURL
        })

        setFormVal('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        user &&
        <div className="flex-1 px-2 sm:px-6 pb-2 justify-between flex flex-col h-screen">
            <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                <div className="flex items-center pl-5">
                    <img src={user.photoURL} alt="" className="w-6 mr-4 sm:w-10 h-6 sm:h-10 rounded-full" />
                    <div className="flex flex-row leading-tight">
                        <div className="text-2xl mt-1 flex items-center">
                            <span className="text-gray-700 mr-3 font-bold items-center">ChitChatRoom</span>
                            <span className="text-green-500">
                                <svg width="10" height="10">
                                    <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center pr-10">
                    {user ? <SignOut /> : ''}
                </div>
            </div>
            <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                {messages && messages.map((msg) => <Message key={msg.id} message={msg} />)}
            </div>
            <span ref={dummy}></span>

            <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                <div className="relative flex">

                    <input type="text" value={formVal} onChange={(e) => setFormVal(e.target.value)} placeholder="Write Something" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3" />
                    <div className="absolute right-0 items-center inset-y-0 flex">

                        <button type="button" onClick={sendMessage} className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 transform rotate-90">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatRoom
