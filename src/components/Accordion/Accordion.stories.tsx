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
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callbacksProps = {
    onChange: callback,
}

export const MenuCollapsedMode: Story<AccordionPropsType> = (args) => {
    return <Accordion
        {...args}
        onClick={onClickCallback}
    />
}

MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: []
}


// export const UserUncollapsedMode = Template.bind({})
// UserUncollapsedMode.args = {
//     ...callbacksProps,
//     titleValue: 'Users',
//     collapsed: false,
//     items: [{title: 'Yan', value: 1}, {title: 'Kek', value: 2}, {title: 'Chebooreck', value: 3}],
// }

export const UserUncollapsedMode: Story<AccordionPropsType> = (args) => {
    return <Accordion
        {...args}
        onClick={onClickCallback}
    />
}

UserUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [{title: 'Yan', value: 1}, {title: 'Kek', value: 2}, {title: 'Chebooreck', value: 3}]
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion
        {...args}
        onChange={() => setValue(!value)}
        collapsed={value}
        onClick={(id)=> alert(`user ${id} was be happy`)}
        items ={[{title: 'Yan', value: 1}, {title: 'Kek', value: 2}, {title: 'Chebooreck', value: 3}]}
    />
}
ModeChanging.args = {
    titleValue: 'Users'
}
