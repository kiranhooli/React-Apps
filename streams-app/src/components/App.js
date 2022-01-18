import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import StreamList from './Stream/StreamList'
import StreamCreate from './Stream/StreamCreate'
import StreamEdit from './Stream/StreamEdit'
import StreamDelete from './Stream/StreamDelete'
import StreamShow from './Stream/StreamShow'
import Header from './Header'
import history from './../history'
function App() {
    return (
        <div className='ui container'>
            <Router history={history} >
                <Header />
                <Switch>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit/:id' exact component={StreamEdit} />
                    <Route path='/streams/delete/:id' exact component={StreamDelete} />
                    <Route path='/streams/show/:id' exact component={StreamShow} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
