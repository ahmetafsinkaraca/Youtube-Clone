import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux"

export default function PrivateRoute({children}) {

    const user = useSelector (state => state.auth.user)
    const location = useLocation()

    if (!user) {
        return <Navigate to='/' replace={true} state={{
            return_url: location.pathname
        }} />
    }

    return children
}
