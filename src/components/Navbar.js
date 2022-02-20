import React,{Fragment} from 'react'
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../actions/auth"
function Navbar() {
      const state=useSelector(state => state.auth)
      const dispatch=useDispatch()
    const authLink=(
           <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
               <li className='nav-item mr-2'>
                    <button onClick={()=>dispatch(logout())} className='nav-link btn btn-danger'>Logout</button>
               </li>
               <span className="navbar-text ml-4">
                    <strong>{state.user ? `welcome ${state.user.username}` : ''}</strong>
               </span>
           </ul>
    )

    const publicLink=(
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Register</Link>
            </li>
            <li className="nav-item">
            <Link to="/login" className="nav-link" href="#">Login</Link>
            </li> 
        </ul>
    )
    return (
        <Fragment>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     {state.isAuthenticated ? authLink : publicLink}
                </div>
            </div>
        </nav>
        </Fragment>
    )
}

export default Navbar
