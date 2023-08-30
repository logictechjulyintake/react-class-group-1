import React, { useState } from 'react'

function APIEgTwo() {

    const [apiResponse, setApiResponse] = useState(null)

    async function getIpInfo() {
        const response = await fetch(process.env.REACT_APP_API_URL, {
            method: "GET"
        });
        const responseJson = await response.json();
        console.log(responseJson);
        setApiResponse(responseJson);
    }

    return <>
        <div className='bg-slate-100 py-10 px-5 drop-shadow-md'>
            <button className='bg-slate-400 py-2 px-2 rounded hover:bg-slate-500 text-white' onClick={getIpInfo}>Load IP Info</button>

            <p className=''>
                {apiResponse ? `${apiResponse.ip} ${apiResponse.city} ${apiResponse.region}` : 'Please click load api info button.'}
            </p>
        </div>
    </>
}

export default APIEgTwo