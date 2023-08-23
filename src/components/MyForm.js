import React, { useState } from 'react'

function MyForm() {

    const [message, setMessage] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        if (formJson.username.length < 6) {
            setMessage('Username too short!');
            return;
        }

        if (formJson.password.length < 6) {
            setMessage('Password too short!');
            return;
        }

        setMessage('Everything okay!');

    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' placeholder='Username...' />
            <input type='password' name='password' placeholder='Password...' />

            <select name='gender'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
            <button type="submit">Go</button>
        </form>
        <p style={{ fontSize: "14px" }}>{message}</p>

    </>
}

export default MyForm