import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const API_URL = import.meta.env.VITE_SERVER_URL + '/api';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const login = async (formData) => {
        const toastId = toast.loading('logging in...');

        try {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            setUser(result.data.user);

            toast.update(toastId, {
                render: 'Logged in successfully!',
                type: 'success',
                isLoading: false,
                autoClose: 2000
            });

            navigate('/profile');
        } catch (err) {
            toast.update(toastId, {
                render: `Error: ${err.message}`,
                type: 'error',
                isLoading: false,
                autoClose: 2000
            });
        }
    };

    const signup = async (formData) => {
        const toastId = toast.loading('signing in...');

        try{
            const res = await fetch(`${API_URL}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            toast.update(toastId, {
                render: 'account created successfully!',
                type: 'success',
                isLoading: false,
                autoClose: 2000
            });

            navigate('/login');
        } catch (err) {
            toast.update(toastId, {
                render: `Error: ${err.message}`,
                type: 'error',
                isLoading: false,
                autoClose: 2000
            });
        }
    };

    const autoLogin = async () => {
        try{
            const res = await fetch(`${API_URL}/auth/autoLogin`, {
                method: 'GET',
                credentials: 'include'
            });

            if(!res.ok){
                throw new Error("Invalid token")
            }

            const result = await res.json();

            setUser(result);
        } catch(err){
            console.log(err.message);
        }
    };

    const logout = async () => {
        const toastId = toast.loading('logging out...');

        try {
            const res = await fetch(`${API_URL}/auth/logout`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            setUser(null);

            toast.update(toastId, {
                render: 'Logged out successfully!',
                type: 'success',
                isLoading: false,
                autoClose: 2000
            });

            navigate('/login');
        } catch(err){
            toast.update(toastId, {
                render: `Error: ${err.message}`,
                type: 'error',
                isLoading: false,
                autoClose: 2000
            });
        }
    };

    return (
        <AuthContext.Provider value={{signup, login, user, autoLogin, logout}}>
            {children}
        </AuthContext.Provider>
    )
}