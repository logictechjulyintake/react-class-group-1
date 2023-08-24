import React, { useState } from 'react'

function APIEgTwo() {

    const [apiResponse, setApiResponse] = useState(null)

    async function getIpInfo() {
        const response = await fetch("https://ipapi.co/8.8.8.8/json/", {
            method: "GET"
        });
        const responseJson = await response.json();
        console.log(responseJson);
        setApiResponse(responseJson);
    }

    return <>
        <button onClick={getIpInfo}>Load IP Info</button>

        <p>
            {apiResponse ? `${apiResponse.ip} ${apiResponse.city} ${apiResponse.region}` : 'Please click load api info button.'}
        </p>

    </>
}

export default APIEgTwo