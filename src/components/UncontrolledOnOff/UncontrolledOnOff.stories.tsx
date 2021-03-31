import React, {useState} from 'react'
import {Story, Meta} from '@storybook/react'
import {UncontrolledOnOff, UncontrolledOnOffPropsType} from './UncontrolledOnOff'
import {action} from '@storybook/addon-actions'

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
} as Meta

const callback = action('on or off clicked')

export const OnMode = () => {
    return <UncontrolledOnOff onChange={callback} defaultOn={true} />
}

export const OffMode = () => {
    return <UncontrolledOnOff onChange={callback} defaultOn={false} />
}

export const DefaultInputValue = () => {
    return <input type="text" defaultValue="{}" />
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
