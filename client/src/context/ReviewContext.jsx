import { createContext, useContext, useState } from "react";

export const ReviewContext = createContext();

export const useReviews = () => useContext(ReviewContext);

const API_URL = 'http://localhost:3000/api';

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
        } catch(err){
            alert(err.message)
        }
    }

    const removeReview = async (reviewId) => {
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
            alert('Review deleted successfully!');
        } catch(err){
            console.log(err)
        }
    } 

    return (
        <ReviewContext.Provider value={{getReviews, reviews, addReview, removeReview}}>
            {children}
        </ReviewContext.Provider>
    )
}