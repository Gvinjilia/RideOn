import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const API_URL = 'https://test-y8eh.onrender.com/api'

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const login = async (formData) => {
        try{
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
            navigate('/profile')
        } catch (err) {
            alert(err.message)
        }
    }

    const signup = async (formData) => {
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

            console.log(result.message);

            navigate('/login');
        } catch (err) {
            alert(err.message)
        }
    }

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
    }

    const logout = async () => {
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

            alert(result);
            setUser(null);
            navigate('/login');
        } catch(err){
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{signup, login, user, autoLogin, logout}}>
            {children}
        </AuthContext.Provider>
    )
}