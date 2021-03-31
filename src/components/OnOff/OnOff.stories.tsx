import React, {useState} from 'react'
import {Story, Meta} from '@storybook/react'
import {OnOff, OnOffPropsType} from './OnOff'
import {action} from '@storybook/addon-actions'

export default {
    title: 'OnOff',
    component: OnOff
} as Meta

const callback = action('on or off clicked')

export const OnMode = () => {
    return <OnOff onChange={callback} on={true} />
}

export const OffMode = () => {
    return <OnOff onChange={callback} on={false} />
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <OnOff onChange={setValue} on={value} />
}

// const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />

// export const OnMode = Template.bind({})
// OnMode.args = {
//     on: true,
//     onChange: x => x
// }
//
// export const OffMode = Template.bind({})
// OffMode.args = {
//     on: false,
//     onChange: (x) => x,
// }
