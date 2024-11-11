import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const token = localStorage.getItem('token');

    // If there's no token, redirect to login
    if (!token) {
        return <Navigate to="/" />;
    }

    // Otherwise, render the children (protected component)
    return children;
}

export default ProtectedRoute;
