import React from 'react'
import {useState} from 'react'

export default {
    title: 'React.memo demo',
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log('mess')
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('usr')
    return (
        <div>
            {props.users.map((u, i) => {
                return (
                    <div key={i}>
                        {u}
                    </div>
                )
            })}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('ex')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Lol', 'Kek', 'Abrek', 'Chel'])
    const addUser = () => {
        const newUser = [...users, 'User' + new Date().getTime()]
        setUsers(newUser)
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>addUser</button>
            <NewMessagesCounter count={counter} />
            <Users users={users} />
        </>
    )
}
