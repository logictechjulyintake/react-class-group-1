import React, { useState } from 'react'

function Input() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return <>
        <input type='text' placeholder='Enter username...' value={username} onChange={(e) => { setUsername(e.target.value) }} />
        <input type='password' placeholder='Enter password...' value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <progress value={1} />
    </>
}

export default Input