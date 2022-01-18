import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = { term: '' }

    onSubmitForm = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            onChange={(e) => this.setState({ term: e.target.value })}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
