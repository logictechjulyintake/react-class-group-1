import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function Home() {
    return <>
        <div className='p-5'>

            <Link to='/apieg'>
                <Button text="API Example 1" />
            </Link>

            <Link to='/apiegtwo'>
                <Button text="API Example 2" />
            </Link>

            <Link to='/banner'>
                <Button text="Banner" />
            </Link>

            <Link to='/form'>
                <Button text="Form" />
            </Link>

            <Link to='/input'>
                <Button text="Input with UseState" />
            </Link>

            <Link to='/map'>
                <Button text="Looping using Map" />
            </Link>

            <Link to='/useref'>
                <Button text="Use Ref Example" />
            </Link>

            <Link to='/useeffecteg'>
                <Button text="Use Effect Example" />
            </Link>

        </div>
    </>
}

export default Home