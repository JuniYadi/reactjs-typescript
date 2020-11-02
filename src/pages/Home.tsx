import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <p>Home Pages</p>

            <div>
                <ul>
                    <li><Link to='/login'>Login Pages</Link></li>
                </ul>
            </div>
        </>
    )
}