import React from 'react'
import { UserAuth } from '../context/AuthContext'

function ProtectedRoute({children}) {
    const {user} =UserAuth();

    if(!user)
    {
        return <Navigate to="/"/>;
    }
    return children;
    return (
        <div>Protected Route</div>
        
    )
}

export default ProtectedRoute
