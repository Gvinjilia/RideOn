import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const API_URL = import.meta.env.VITE_SERVER_URL + '/api';

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
        const toastId = toast.loading('adding Product to the cart...');

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

            toast.update(toastId, {
                render: 'Product added to the cart!',
                type: 'success',
                isLoading: false,
                autoClose: 2000
            });
        } catch (err){
            toast.update(toastId, {
                render: `Error: ${err.message}`,
                type: 'error',
                isLoading: false,
                autoClose: 2000
            });
        }
    }

    const clearCart = async () => {
        const toastId = toast.loading('Clearing the cart...');

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

            toast.update(toastId, {
                render: 'cart cleared',
                type: 'success',
                isLoading: false,
                autoClose: 2000
            });
        } catch (err){
            toast.update(toastId, {
                render: `Error: ${err.message}`,
                type: 'error',
                isLoading: false,
                autoClose: 2000
            });
        }
    }

    const deleteBikeFromCart = async (bikeId) => {
        const toastId = toast.loading('remove the product...');

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

            toast.update(toastId, {
                render: 'Product deleted successfully from cart',
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
    };


    return (
        <CartContext.Provider value={{addToCart, cart, getCartItems, totalPrice, clearCart, deleteBikeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}