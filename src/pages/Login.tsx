import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

export default function Login() {
    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <p>Login Pages</p>

            <div>
                <ul>
                    <li><Link to='/'>Home Pages</Link></li>
                </ul>
            </div>
        </>
    )
}