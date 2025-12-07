import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUsers = () => useContext(UserContext);

const API_URL = import.meta.env.VITE_SERVER_URL + '/api';

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try{
            const res = await fetch(`${API_URL}/users`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            setUsers(result);
        } catch(err){
            console.log(err)
        }
    }

    const deleteUser = async (userId) => {
        try {
            const res = await fetch(`${API_URL}/users/${userId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });

            if(!res.ok){
                const result = await res.json();
                throw new Error(result.message)
            }

            setUsers((prev) => prev.filter((user) => user._id !== userId && user.role !== 'admin'));
        } catch(err){
            console.log(err)
        }
    }

    const updateUserRole = async (userId) => {
        try {
            const res = await fetch(`${API_URL}/users/${userId}`, {
                method: 'PATCH',
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message);
            }

            setUsers((prevUsers) => prevUsers.map((user) => user._id === userId ? result : user));
        } catch(err){
            console.log(err);
        }
    }

    return (
        <UserContext.Provider value={{getUsers, users, deleteUser, updateUserRole}}>
            {children}
        </UserContext.Provider>
    )
}