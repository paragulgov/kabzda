import React, {useState} from 'react'
import {Meta} from '@storybook/react'
import {Select} from './Select'
import {action} from '@storybook/addon-actions'

export default {
    title: 'Select',
    component: Select
} as Meta

export const WithValue = () => {
    const [value, setValue] = useState('3')
    return (
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Karabulak'},
                {value: '2', title: 'Grozny'},
                {value: '3', title: 'Hasavurt'}
            ]}
        />
    )
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return (
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Karabulak'},
                {value: '2', title: 'Grozny'},
                {value: '3', title: 'Hasavurt'}
            ]}
        />
    )
}


