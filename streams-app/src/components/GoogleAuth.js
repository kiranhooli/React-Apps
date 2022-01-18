import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signIn, signOut } from '../actions'

function GoogleAuth() {
    const { isSignedIn } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            dispatch(signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId()))
        } else {
            dispatch(signOut())
        }
    }

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init(
                {
                    clientId: '271733751578-pivtguabipaskiubv5en2bemh4fhrdte.apps.googleusercontent.com',
                    scope: 'email'
                }
            ).then(() => {
                let auth = window.gapi.auth2.getAuthInstance()
                onAuthChange(auth.isSignedIn.get())
                auth.isSignedIn.listen(onAuthChange)
            })
        })
        // eslint-disable-next-line
    }, [])

    const renderAuthButton = () => {
        if (isSignedIn === null) return null
        if (isSignedIn) return (
            <button
                onClick={() => window.gapi.auth2.getAuthInstance().signOut()}
                className="ui red google button"
            >
                <i className="google icon" />
                Sign Out
            </button>
        )
        else return (
            <button
                onClick={() => window.gapi.auth2.getAuthInstance().signIn()}
                className="ui red google button"
            >
                <i className="google icon" />
                Sign In with Google
            </button>
        )
    }
    return (
        <div>
            {renderAuthButton()}
        </div>
    )
}

export default GoogleAuth
