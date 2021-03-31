import React from 'react'
import {Meta} from '@storybook/react'
import {UncontrolledAccordion} from './UncontrolledAccordion'
import {action} from '@storybook/addon-actions'

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
} as Meta

const callback = action('accordion mode change event fired')

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue="Users" />
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
