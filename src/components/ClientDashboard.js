import React, {useEffect} from 'react'
import {getClientUser} from "../actions/auth"
import {useDispatch} from "react-redux"

 function ClientDashboard() {
     const dispatch=useDispatch()
     useEffect(()=>{
         dispatch(getClientUser())
     }, [dispatch])
    return (
        <div className='container mt-5'>
             welcome! we have talented developer ready for hired
        </div>
    )
}

export default ClientDashboard;
