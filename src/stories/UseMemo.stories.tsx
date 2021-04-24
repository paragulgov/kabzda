import React, {useMemo, useState} from 'react'

export default {
    title: 'useMemo',
}

export const ExampleDifficultCounting = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
            <hr />
            <div>
                result for a: {resultA}
            </div>
            <div>
                result for b: {resultB}
            </div>
        </>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
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

export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Lol', 'Kek', 'Abrek', 'Chel'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'lolka' + new Date().getTime()]
        setUsers(newUser)
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add User</button>
            {counter}
            <Users users={newArray} />
        </>
    )
}
