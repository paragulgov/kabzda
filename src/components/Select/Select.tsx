import React, {KeyboardEventHandler, useEffect, useState} from 'react'
import styles from './Select.module.css'

type ItemType = {
    title: string
    value?: any
}

export type SelectPropsType = {
    value: any
    onChange: any
    items: Array<ItemType>
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const next = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (next) {
                        props.onChange(next.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>

                {active &&
                <div className={styles.items}>
                    {props.items.map(i => {
                        return (
                            <div
                                onMouseEnter={() => setHoveredElementValue(i.value)}
                                className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                onClick={() => onItemClick(i.value)}
                                key={i.value}
                            >
                                {i.title}
                            </div>
                        )
                    })}
                </div>}
            </div>
        </>

    )
}
