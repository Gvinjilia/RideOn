import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const BikeContext = createContext();

export const useBikes = () => useContext(BikeContext);

const API_URL = 'https://test-y8eh.onrender.com/api'

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
            alert('Product deleted successfully!');
        } catch(err){
            console.log(err)
        }
    }

    const addBike = async (bikeData) => {
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
        } catch(err){
            console.log(err)
        }
    }
    
    const updateBike = async (bikeData, bikeId) => {
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
        } catch(err){
            console.log(err)
        }
    }

    return (
        <BikeContext.Provider value={{getBikes, bikes, getBike, bike, getHeroBikes, heroSectionBikes, getFeaturedBikes, heroSectionFeatured, deleteBike, addBike, updateBike}}>
            {children}
        </BikeContext.Provider>
    )
}