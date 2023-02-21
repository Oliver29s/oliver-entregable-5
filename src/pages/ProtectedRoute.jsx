import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const {nameTrainer} = useSelector(state => state)
    console.log({nameTrainer})
    if(nameTrainer){
          return <Outlet/>
    }else{
        return <Navigate to='/'/>
    }
   
}

export default ProtectedRoute