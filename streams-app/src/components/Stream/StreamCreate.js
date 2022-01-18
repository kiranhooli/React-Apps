import React from 'react'
import StreamForm from './StreamForm'
import { createStream } from '../../actions'
import { useDispatch } from 'react-redux'

const StreamCreate = () => {
    const dispatch = useDispatch()
    const onSubmit = (formValues) => {
        dispatch(createStream(formValues))
    }

    return (
        <>
            <h1>Create a Stream</h1>
            <StreamForm onSubmit={onSubmit} />
        </>
    )
}


export default StreamCreate