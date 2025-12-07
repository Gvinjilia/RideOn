import { useState, useContext, createContext } from "react";

export const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

const API_URL = import.meta.env.VITE_SERVER_URL + '/api';

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const getTheItemToOrder = async (orderData) => {
        try{
            const res = await fetch (`${API_URL}/order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData),
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            setOrders([...orders, result.order])
        } catch (err){
            console.log(err.message)
        }
    }

    const getOrders = async () => {
        try{
            const res = await fetch(`${API_URL}/order/history`, {
                method: 'GET',
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            setOrders(result);
        }catch(err){
            console.log(err.message)
        }
    }

    const getAllOrder = async () => {
        try {
            const res = await fetch(`${API_URL}/order`, {
                method: 'GET',
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message)
            }

            setOrders(result);
        } catch(err){
            console.log(err);
        }
    }

    const updateOrderToShipped = async (orderId) => {
        try {
            const res = await fetch(`${API_URL}/order/${orderId}/ship`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });

            const result = await res.json();

            if(!res.ok){
                throw new Error(result.message);
            }

            setOrders((prev) => (
                prev.map((order) => order._id === result.order._id ? result.order : order)
            ));
        } catch (err){
            console.log(err);
        }
    }

    return (
        <OrderContext.Provider value={{getTheItemToOrder, orders, getOrders, getAllOrder, updateOrderToShipped}}>
            {children}
        </OrderContext.Provider>
    )
}