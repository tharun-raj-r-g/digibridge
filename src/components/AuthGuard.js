import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the key exists in session storage
        const isAuthenticated = sessionStorage.getItem('current-user');

        // If the key doesn't exist, redirect to another page
        if (!isAuthenticated) {
            navigate('/signin'); // Replace '/login' with your desired redirect path
        }
    }, []);

    // Render children only if the key exists
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthGuard;
