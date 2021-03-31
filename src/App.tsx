import React, {useState} from 'react'
import './App.css'
import {Rating, RatingValueType} from './components/Rating/Rating'
import {OnOff} from './components/OnOff/OnOff'
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion'
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating'
import {Accordion} from './components/Accordion/Accordion'
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff'

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <PageTitle title="This is APP component" />

            <Accordion
                titleValue="Menu"
                collapsed={accordionCollapsed}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
            />

            <UncontrolledAccordion titleValue="List" />

            <Rating value={ratingValue} onClick={setRatingValue} />
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}

            <UncontrolledRating />

            <OnOff on={switchOn} onChange={(on) => setSwitchOn(on)} />
            <UncontrolledOnOff onChange={setSwitchOn} />
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
