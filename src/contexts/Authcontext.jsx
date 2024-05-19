import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
    });

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setAuthState(prevState => ({
              ...prevState,
                isAuthenticated: true,
                user: JSON.parse(user),
            }));
        } else {
            setAuthState({
                isAuthenticated: false,
                user: null,
            });
        }
        console.log("Initial authState:", authState); // Log the initial state
    }, []);

    const login = (user) => {
        console.log("login function called");
        localStorage.setItem('user', JSON.stringify(user));
        setAuthState(prevState => ({
           ...prevState,
            isAuthenticated: true,
            user: user,
        }));
        console.log("After login:", authState); // Log the updated state
    };
    
    const logout = () => {
        localStorage.removeItem('user');
        setAuthState({
            isAuthenticated: false,
            user: null,
        });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

