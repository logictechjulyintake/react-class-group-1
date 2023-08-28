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
        <div className='py-10 px-5 font-semibold bg-slate-100 mb-5'>
            <button onClick={getRandomUser} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-5">
                Get User
            </button>

            <p>
                {userInfo ? `${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}` : 'Click Load User!'}
            </p>

            <img src={userInfo ? userInfo.picture.large : null} height={200} />
        </div>

    </>
}

export default FetchAPIEg