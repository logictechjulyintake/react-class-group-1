import React, { useState } from 'react'

function Input() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return <>
        <div className='bg-slate-100 py-10 px-5'>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2' type='text' placeholder='Enter username...' value={username} onChange={(e) => { setUsername(e.target.value) }} />
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2' type='password' placeholder='Enter password...' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <progress value={1} />
        </div>
    </>
}

export default Input