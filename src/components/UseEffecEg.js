import React, { useEffect } from 'react'

function UseEffecEg() {

    useEffect(function () {
        // runs on first render
        console.log("ok")
    }, []);

    return <>
    </>
}

export default UseEffecEg