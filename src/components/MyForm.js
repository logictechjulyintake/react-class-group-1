import React, { useState } from 'react'
import Button from './Button';

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
        <form onSubmit={handleSubmit} className='bg-slate-100 py-10 px-5'>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2' type='text' name='username' placeholder='Username...' />
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2' type='password' name='password' placeholder='Password...' />

            <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2' name='gender'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
            <Button type="submit" text="Go" />
            <p style={{ fontSize: "14px" }}>{message}</p>
        </form>

    </>
}

export default MyForm