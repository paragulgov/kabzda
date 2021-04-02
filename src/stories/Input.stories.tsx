import React, {ChangeEvent, useRef, useState} from 'react'
import {Meta} from '@storybook/react'


export default {
    title: 'input',
    // component: input,
} as Meta

export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return (
        <>
            <input value={value} onChange={onChange} /> - {value}
        </>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const InputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = InputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <>
            <input ref={InputRef} />
            <button onClick={save}>Save
            </button>
            <span>actually value: {value}</span>
        </>
    )
}
export const ControlledInputWithFixedValue = () => <input value="privet" />
