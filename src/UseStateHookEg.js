import React, { useState } from 'react'

// use state hook example
function UseStateHookEg() {

    const [count, setCount] = useState(0);

    function updateCount() {
        setCount(count + 1);
    }

    return <>
        <button onClick={updateCount}>Update</button>
        <p>{count}</p>
    </>
}

export default UseStateHookEg