import React from 'react'

export type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const OnOffWrapperStyle = {
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center'
    }
    const onStyle = {
        width: '30px',
        height: '20px',
        padding: '5px',
        marginRight: '2px',
        border: '1px solid black',
        backgroundColor: props.on ? '#7DFCD1' : 'white',
        cursor: 'pointer'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        padding: '5px',
        marginRight: '2px',
        border: '1px solid black',
        backgroundColor: !props.on ? '#ff6363' : 'white',
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '6px',
        border: '1px solid black',
        backgroundColor: props.on ? '#7DFCD1' : '#ff6363'
    }

    return (
        <div style={OnOffWrapperStyle}>
            <div style={onStyle} onClick={() => {
                props.onChange(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.onChange(false)
            }}>Off
            </div>
            <div style={indicatorStyle} />
        </div>
    )
}
