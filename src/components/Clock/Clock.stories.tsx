import React from 'react'
import {Clock} from './Clock'

export default {
    title: 'Clock',
    component: Clock
}

export const DigitalClock = () => {
    console.log('Clock')

    return <Clock mode="digital" />
}

export const AnalogClock = () => {
    console.log('Clock')

    return <Clock mode="analog" />
}
