import React, { useState } from 'react'
import Button from './Button';

// use state hook example
function UseStateHookEg() {

    const [count, setCount] = useState(0);

    function updateCount() {
        setCount(count + 1);
    }

    return <>
        <div className='bg-slate-100 py-10 px-5'>
            {/* <button>Update</button> */}
            <Button onClick={updateCount} text="Update" />
            <p className="text-3xl">{count}</p>
        </div>
    </>
}

export default UseStateHookEg