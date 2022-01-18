
import { signOut } from 'firebase/auth'
import { auth } from './../firebase'

const SignOut = () => {
    const signOutUser = async () => {
        await signOut(auth)
    }
    return (
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded' onClick={signOutUser}>SignOut</button>
    )
}

export default SignOut



