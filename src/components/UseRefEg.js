import React, { useRef } from 'react'

function UseRefEg() {

    const usernameRef = useRef(null)

    function updateInput() {
        const username = usernameRef.current.value;
        alert(username)
    }

    return <>

        <div className='bg-slate-100 py-10 px-5'>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' ref={usernameRef} placeholder='Enter username...' />

            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5' onClick={updateInput}>Go</button>
        </div>
    </>
}

export default UseRefEg