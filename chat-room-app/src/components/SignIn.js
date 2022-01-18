import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from './../firebase'

const SignIn = () => {
    const signIn = async () => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={signIn}>SignIn with Google</button>
        </div>
    )
}

export default SignIn
