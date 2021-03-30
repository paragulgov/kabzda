import React, {useState} from 'react'
import './App.css'
import {Rating, RatingValueType} from './components/Rating/Rating'
import OnOff from './components/OnOff/OnOff'
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion'
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating'
import Accordion from './components/Accordion/Accordion'

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className="App">
            <PageTitle title="This is APP component" />

            {/*<Accordion titleValue="Menu" collapsed={true} />*/}

            <UncontrolledAccordion titleValue="Menu" />

            <Rating value={ratingValue} onClick={setRatingValue} />
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}

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
