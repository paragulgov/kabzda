import React from 'react'
import './App.css'
import {Rating} from './components/Rating/Rating'
import OnOff from './components/OnOff/OnOff'
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion'
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating'
import Accordion from './components/Accordion/Accordion'

function App() {
    return (
        <div className="App">
            <PageTitle title="This is APP component" />

            <Accordion titleValue="Menu" collapsed={true} />

            <UncontrolledAccordion titleValue="Menu" />

            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />

            <UncontrolledRating />

            <OnOff />
        </div>
    )
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App
