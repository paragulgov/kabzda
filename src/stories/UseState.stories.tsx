import React, {useMemo} from 'react'
import {useState} from 'react'

export default {
    title: 'useState demo',
}

function generateData() {
    console.log('generateData')
    return 21347463532
}

export const Example1 = () => {
    console.log('example')

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

    return (
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </>
    )
}
