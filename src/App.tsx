import React from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
import {Rating} from './components/Rating/Rating'

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

function App() {
    return (
        <div>
            <PageTitle title="This is APP component" />
            Article 1
            <Rating value={3} />
            <Accordion title="Menu" />
            <Accordion title="List" />
            Article 2
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    )
}

export default App
