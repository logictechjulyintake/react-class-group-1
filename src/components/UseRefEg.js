import React, { useRef } from 'react'

function UseRefEg() {

    const usernameRef = useRef(null)

    function updateInput() {
        const username = usernameRef.current.value;
        alert(username)
    }

    return <>
        <input ref={usernameRef} placeholder='Enter username...' />

        <button onClick={updateInput}>Go</button>
    </>
}

export default UseRefEg