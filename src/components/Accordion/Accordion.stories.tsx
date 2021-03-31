import React, {useState} from 'react'
import {Story, Meta} from '@storybook/react'
import {Accordion, AccordionPropsType} from './Accordion'
import {action} from '@storybook/addon-actions'

export default {
    title: 'Accordion',
    component: Accordion
} as Meta

const callback = action('accordion mode change event fired')

export const MenuCollapsedMode = () => {
    return <Accordion onChange={callback} titleValue="Menu" collapsed={true}/>
}

export const UserUncollapsedMode = () => {
    return <Accordion onChange={callback} titleValue="Users" collapsed={false}/>
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion onChange={() => setValue(!value)} titleValue="Users" collapsed={value}/>
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
