import { auth } from './../firebase'

const Message = (props) => {

    const { text, uid, photoURL } = props.message;

    const messageClass1 = uid === auth.currentUser.uid ? 'justify-end' : 'items-end';
    const messageClass2 = uid === auth.currentUser.uid ? 'items-end' : 'items-start';

    return (
        <>
            <div className="chat-message">
                <div className={`flex ${messageClass1}`}>
                    <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 ${messageClass2}`}>
                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{text}</span></div>
                    </div>
                    <img src={photoURL} alt="My profile" className="w-6 h-6 rounded-full order-1" />
                </div>
            </div>
        </>
    )
}

export default Message
