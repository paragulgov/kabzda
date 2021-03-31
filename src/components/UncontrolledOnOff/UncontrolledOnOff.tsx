import React, {useState} from 'react'

export type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {
    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

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
        backgroundColor: on ? '#7DFCD1' : 'white',
        cursor: 'pointer'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        padding: '5px',
        marginRight: '2px',
        border: '1px solid black',
        backgroundColor: !on ? '#ff6363' : 'white',
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '6px',
        border: '1px solid black',
        backgroundColor: on ? '#7DFCD1' : '#ff6363'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div style={OnOffWrapperStyle}>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle} />
        </div>
    )
}
