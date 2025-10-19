import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const API_URL = 'https://test-y8eh.onrender.com/api'

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const getCartItems = async () => {
        try{
            const res = await fetch(`${API_URL}/cart`, {
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            setCart(result.bikes);
            setTotalPrice(result.totalPrice);
        } catch (err){
            console.log(err.message)
        }
    }

    const addToCart = async (bike, quantity) => {
        try{
            const res = await fetch(`${API_URL}/cart`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({bikes: [{ bikeId: bike._id, price: bike.price, images: bike.images, name: bike.name, brand: bike.brand, type: bike.type, quantity }]}),
                credentials: 'include',
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message);
            }

            setCart(result.data.userCart.bikes);
            setTotalPrice(result.data.totalPrice);
        } catch (err){
            console.log(err.message)
        }
    }

    const clearCart = async () => {
        try {
            const res = await fetch(`${API_URL}/cart/clear`, {
                method: 'DELETE',
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            setCart([]);
            setTotalPrice(0);
        } catch (err){
            console.log(err.message)
        }
    }

    const deleteBikeFromCart = async (bikeId) => {
        try{
            const res = await fetch(`${API_URL}/cart/${bikeId}`, {
                method: 'DELETE',
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            setCart(result.cart.bikes);
            setTotalPrice(result.totalPrice);
        } catch(err){
            console.log(err.message);
        }
    }


    return (
        <CartContext.Provider value={{addToCart, cart, getCartItems, totalPrice, clearCart, deleteBikeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}