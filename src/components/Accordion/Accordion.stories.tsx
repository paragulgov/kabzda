import React, {useState} from 'react'
import {Meta, Story} from '@storybook/react'
import {Accordion, AccordionPropsType} from './Accordion'
import {action} from '@storybook/addon-actions'

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        },
        onChange: {
            table: {
                category: 'Events'
            }
        },
        titleValue: {
            table: {
                category: 'Main'
            }
        },
        collapsed: {
            table: {
                category: 'Main'
            }
        },
    }
} as Meta

const callback = action('accordion mode change event fired')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callbacksProps = {
    onChange: callback,
}
export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true
}

export const UserUncollapsedMode = Template.bind({})
UserUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion
        {...args}
        onChange={() => setValue(!value)}
        collapsed={value}
    />
}
ModeChanging.args = {
    titleValue: "Users"
}
