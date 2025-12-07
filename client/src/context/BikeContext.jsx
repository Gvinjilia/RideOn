import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const BikeContext = createContext();

export const useBikes = () => useContext(BikeContext);

const API_URL = import.meta.env.VITE_SERVER_URL + '/api';

export const BikeProvider = ({ children }) => {
    const [bikes, setBikes] = useState([]);
    const [bike, setBike] = useState([]);
    const [heroSectionBikes, setHeroSectionBikes] = useState([]);
    const [heroSectionFeatured, setHeroSectionFeatured] = useState([]); 
    const navigate = useNavigate();

    const getBikes = async () => {
        try{
            const res = await fetch(`${API_URL}/bikes`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            setBikes(result)
        } catch(err){
            alert(err.message)
        }
    }

    const getBike = async (bikeId) => {
        try{
            const res = await fetch(`${API_URL}/bikes/${bikeId}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            setBike(result)
            navigate(`/bikes/${bikeId}`)
        }catch(err){
            console.log(err.message)
        }
    }

    const getHeroBikes = async () => {
        try{
            const res = await fetch(`${API_URL}/bikes?section=hero`, {
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message);
            }

            setHeroSectionBikes(result);
        } catch(err){
            console.log(err);
        }
    }

    const getFeaturedBikes = async () => {
        try{
            const res = await fetch(`${API_URL}/bikes?section=featured`, {
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message);
            }

            setHeroSectionFeatured(result);
        } catch(err){
            console.log(err);
        }
    }

    const deleteBike = async (bikeId) => {
        const toastId = toast.loading('Deleting a Product...');

        try {
            const res = await fetch(`${API_URL}/bikes/${bikeId}`, {
                method: 'DELETE',
                credentials: 'include'
            });

            if(!res.ok){
                const result = await res.json();
                throw new Error(result.message);
            }

            setBikes((prev) => prev.filter((bike) => bike._id !== bikeId));
            toast.update(toastId, {
                render: 'Product deleted successfully',
                type: 'success',
                isLoading: false,
                autoClose: 2000
            });
        } catch(err){
            console.log(err)
        }
    }

    const addBike = async (bikeData) => {
        const toastId = toast.loading('Adding a new Product...');

        try {
            const res = await fetch(`${API_URL}/bikes`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(bikeData),
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message);
            }

            setBikes((prevValues) => [...prevValues, result]);

            toast.update(toastId, {
                render: 'Product successfully added',
                type: 'success',
                isLoading: false,
                autoClose: 2000
            });
        } catch(err){
            toast.update(toastId, {
                render: `Error: ${err.message}`,
                type: 'error',
                isLoading: false,
                autoClose: 2000
            });
        }
    }
    
    const updateBike = async (bikeData, bikeId) => {
        const toastId = toast.loading('updating Product...');

        try {
            const res = await fetch(`${API_URL}/bikes/${bikeId}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(bikeData),
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message);
            }

            setBikes((prevValues) => prevValues.map((bike) => bike._id === result._id ? result : bike));

            toast.update(toastId, {
                render: 'Product updated successfully',
                type: 'success',
                isLoading: false,
                autoClose: 2000
            });
        } catch(err){
            toast.update(toastId, {
                render: `Error: ${err.message}`,
                type: 'error',
                isLoading: false,
                autoClose: 2000
            });
        }
    }

    return (
        <BikeContext.Provider value={{getBikes, bikes, getBike, bike, getHeroBikes, heroSectionBikes, getFeaturedBikes, heroSectionFeatured, deleteBike, addBike, updateBike}}>
            {children}
        </BikeContext.Provider>
    )
}