import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchStream, deleteStream } from '../../actions'
import history from './../../history'
import Modal from './../Modal'

function StreamDelete() {
    const currentUser = useSelector(state => state.auth.userId)
    const { id } = useParams()
    const dispatch = useDispatch()
    const stream = useSelector((state) => state?.streams[id])

    const actions = (
        <>
            <button onClick={() => dispatch(deleteStream(id))} className="ui button negative">Delete</button>
            <Link to='/' onClick={() => history.push('/')} className="ui button">Cancel</Link>
        </>
    )
    useEffect(() => {
        dispatch(fetchStream(id))
    }, [dispatch, id])
    return (
        <>
            {stream?.userId === currentUser ?
                <Modal
                    title="Delete Stream"
                    content={`Are you sure you want to delete this stream? ${stream?.title}`}
                    actions={actions}
                /> :
                <h2>Unauthorized</h2>
            }
        </>
    )
}

export default StreamDelete
