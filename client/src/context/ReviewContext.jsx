import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const ReviewContext = createContext();

export const useReviews = () => useContext(ReviewContext);

const API_URL = import.meta.env.VITE_SERVER_URL + '/api';

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    
    const getReviews = async (bikeId) => {
        try {
            const res = await fetch(`${API_URL}/reviews?bikeId=${bikeId}`, {
                method: 'GET',
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            const filtered = result.filter((review) => review.bikeId === bikeId);

            setReviews(filtered)
        } catch (err){
            console.log(err.message);   
        }
    }

    const addReview = async (formData, bikeId) => {
        const toastId = toast.loading('adding Review...');

        try {
            const res = await fetch(`${API_URL}/reviews/${bikeId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
                credentials: 'include',
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            setReviews([...reviews, result]);
            toast.update(toastId, {
                render: 'Review added successfully',
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

    const removeReview = async (reviewId) => {
        const toastId = toast.loading('removing...');

        try {
            const res = await fetch(`${API_URL}/reviews/${reviewId}`, {
                method: 'DELETE',
                credentials: 'include'
            });

            if(!res.ok){
                const result = await res.json();
                throw new Error(result.message)
            }

            setReviews((prevValue) => prevValue.filter((r) => r._id !== reviewId));
            toast.update(toastId, {
                render: 'Review Deleted successfully',
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
        <ReviewContext.Provider value={{getReviews, reviews, addReview, removeReview}}>
            {children}
        </ReviewContext.Provider>
    )
}