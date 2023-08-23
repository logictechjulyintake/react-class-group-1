import React, { useState } from 'react'

function FetchAPIEg() {

    const [userInfo, setUserInfo] = useState(null)

    async function getRandomUser() {
        // https://dog.ceo/api/breeds/image/random
        const response = await fetch('https://randomuser.me/api/')
        const responseJson = await response.json();
        const responseUserInfo = responseJson.results[0];
        console.log(responseUserInfo);
        setUserInfo(responseUserInfo);
    }

    return <>
        <button onClick={getRandomUser}>Get User</button>
        <p>
            {userInfo ? `${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}` : 'Click Load User!'}
        </p>
    </>
}

export default FetchAPIEg