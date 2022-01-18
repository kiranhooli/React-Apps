import React, { useState } from 'react'
import Translate from './components/Translate'
import Dropdown from './components/Dropdown'
import Accordion from './components/Accordion'
import List from './components/List'
import Route from './components/Route'
import Header from './components/Header'


const items = [
    {
        title: 'What is React?',
        content: 'React is a Javascript Framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite Javascript library in the world'
    },
    {
        title: 'How to use React?',
        content: 'Use React by Creating components'
    }
]
const options = [
    {
        label: "the Red color",
        value: "red"
    },
    {
        label: "the Green color",
        value: "green"
    },
    {
        label: "the Blue color",
        value: "blue"
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <List />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                    label="Color"
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </>
    )
}
export default App


