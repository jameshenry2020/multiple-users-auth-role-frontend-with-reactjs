import {Route, Redirect} from "react-router-dom"
import { useSelector } from "react-redux"
import { Component } from "react"


export const CPrivateRoute=({component:Component, path, ...rest})=>{
    const state=useSelector(state =>state.auth)
    return <Route path={path}
                  {...rest}
                  render={(props)=>{
                      if(state.isLoading){
                          return <h3>Loading....</h3>
                      }else if(!state.isAuthenticated &&  !state.isClient){
                          return <Redirect to="/login"/>
                      }else{
                          return <Component {...props}/>
                      }
                  }}/>
    
}



export const FPrivateRoute = ({component:Component, path, ...rest }) => {
    const state=useSelector((state) => state.auth)
    return <Route 
      path={path}
      {...rest}
      render ={(props)=>{
        if (state.isLoading){
               return <h2>Loading ....</h2>
        }else if(state.isAuthenticated && !state.isClient){
            return <Component {...props}/>
        }else{    
             return <Redirect to="/login" />
        }

    }
        
    }/>
}