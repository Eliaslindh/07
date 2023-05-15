import React, { useState, useEffect } from 'react'

type Contact = {
    name: string,
    pho: number
}

const save = () => {
    //nextjs 08
    const [data, setData] = useState<Contact[]>([])
    const [update, setUpdate] = useState(false)

    const contact = {
        name: 'Christian',
        pho: 2342420
    }
    useEffect(() => {
        const local = JSON.parse(window.localStorage.getItem('contacts')!)
        if (local && !local == null) {
            setData(local)
        }
    }, [])

    return (
        <div>
            <button onClick={() => {
                setUpdate(!update)
                setData([...data, contact])
                window.localStorage.setItem('contacts', JSON.stringify(data))
            }}>Add to storage</button>
            {data.map(d => (
                <div>
                    <h1>{d.name} </h1>
                    <h1>{d.pho} </h1>
                </div>
            ))}
        </div>
    )
}

export default save