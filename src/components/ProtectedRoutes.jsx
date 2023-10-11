
import React from 'react'
import {Navigate, Outlet} from "react-router-dom"



const ProtectedRoutes = ({auth}) => {
  return (
    !auth
    ?
    <Navigate to="/login"/>
    :
    <Outlet/>
  )
}


export default ProtectedRoutes