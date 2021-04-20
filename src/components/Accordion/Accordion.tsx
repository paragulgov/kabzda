import React from 'react'

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * optional color of header text
     */
    color?: string
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
                color={props.color}
            />
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items} />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3
            onClick={(e) => props.onChange()}
            style={{color: props.color ? props.color : 'black'}}
        >
            {props.title}
        </h3>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((item, index) => (
                <li key={index} onClick={() => props.onClick(item.value)}>{item.title}</li>
            ))}
        </ul>
    )
}

