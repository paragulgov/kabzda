import React, {useEffect, useState} from 'react'

export default {
    title: 'useEffect demo',
}


export const SimpleExample = () => {
    console.log('SimpleExample')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every COUNTER change')

        document.title = counter.toString()
    }, [counter])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>counter</button>
            <button onClick={() => setFake(fake + 1)}>fake</button>
            <div>
                {counter} {fake}
            </div>
        </>
    )
}

export const SetIntervalExample = () => {
    console.log('SetIntervalExample')
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const IntervalID = setInterval(() => {
            console.log('tik')
            setCounter((state) => state + 1)
        }, 1000)

        return () => {
            clearInterval(IntervalID)
        }
    }, [])

    return (
        <div>
            counter: {counter}
        </div>
    )
}

export const KeyTrackerExample = () => {
    console.log('KeyTrackerExample')
    const [text, setText] = useState('')

    console.log('component rendered with' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <div>
            typed text: {text}
        </div>
    )
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [text, setText] = useState('')

    console.log('component rendered with ' + text)

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log('timeout expired')
            setText('3 sec passed')
        }, 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [text])

    return (
        <div>
            typed text: {text}
        </div>
    )
}
