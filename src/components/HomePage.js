import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='container d-flex justify-content-between mt-5'>
            <div className='flex-fill'>
                <h3>signup as an employer</h3>
                <Link to="/client/signup" className='btn btn-warning'>Signup</Link>
            </div>
            <div className='flex-fill'>
                <h3>signup as a freelancer</h3>
                <Link to="/freelance/signup" className='btn btn-warning'>Signup</Link>
            </div>
        </div>
    )
}

export default HomePage
