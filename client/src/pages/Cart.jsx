import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";

import cartImage from '../RideOn Images/10069.jpg';
import emptyCart from  '../RideOn Images/empty cart.svg';

import Footer from "../components/Footer";

const Cart = () => {
    const { cart, getCartItems, totalPrice, clearCart, deleteBikeFromCart, addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        getCartItems();
    }, []);

    return (
        <>
            <div className="lg:h-120 mb-15" style={{ backgroundImage: `url(${cartImage})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                <p style={{wordSpacing: '8px'}} className="p-3 pl-20 text-gray-400 text-[14px]">HomePage - <span className="text-white font-semibold text-[16px]">Cart</span></p>
                <div className="flex justify-center items-center">
                    <hr className="border-gray-500 w-385" />
                </div>
                <div className="flex items-center h-full">
                    <p className="ml-20 lg:text-[70px] md:text-[50px] sm:text-[50px] text-[40px] text-white font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>CART</p>
                </div>
            </div>
            {   
                cart.length > 0 ? (
                    <>
                        <div className="flex justify-center items-center mb-10 lg:p-0 md:p-3 sm:p-3 p-3">
                            <table className="table-auto border border-gray-300 mb-10 lg:w-280 md:w-[100%] sm:w-[100%] w-[100%]">
                                <thead>
                                    <tr style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>
                                        <th className="border border-gray-300 p-1">BIKE IMAGE</th>
                                        <th className="border border-gray-300 p-1">BIKE TYPE</th>
                                        <th className="border border-gray-300 p-1">BIKE QUANTITY</th>
                                        <th className="border border-gray-300 p-1">BIKE PRICE</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        cart.map((item, index) => (
                                            <tr key={index}>
                                                <td className="border border-gray-300 p-2">
                                                    <div className="flex justify-center items-center">
                                                        <img src={item.images[0]} width={100} height={75} />
                                                    </div>
                                                </td>
                                                <td className="border border-gray-300 p-2 text-center">{item.type}</td>
                                                <td className="border border-gray-300 p-5 flex justify-center items-center gap-4 font-bold">
                                                    <div className="border border-gray-300 p-2 w-25 flex justify-center items-center gap-4 font-bold">
                                                        <button onClick={() => deleteBikeFromCart(item.bikeId)}>-</button>
                                                        <span>{item.quantity}</span>
                                                        <button onClick={() => addToCart({...item, _id: item.bikeId})}>+</button>
                                                    </div>
                                                </td>
                                                <td className="border border-gray-300 p-2 text-center">{item.price}</td>
                                            </tr>
                                    ))}
                                    </tbody>
                            </table>
                        </div>
                        <div className="lg:p-0 md:p-3 sm:p-3 p-3">
                            <div className="lg:ml-70 border border-gray-300 lg:w-140 md:w-120 sm:w-auto w-auto p-5">
                                <h1 style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="font-semibold text-[18px] mb-3">BIKES</h1>
                                {
                                    cart.map((item, index) => (
                                        <div key={index} className="mb-5">
                                            <p>{item.name} {item.quantity}X</p>
                                        </div>
                                    ))
                                }
                                <p style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="font-semibold text-[18px] mb-3">Total Price: {totalPrice}</p>
                                <div className="flex gap-5"> 
                                    <button onClick={() => clearCart()} style={{backgroundColor: 'var(--background-color, #FFDB00)', fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="w-50 p-2 text-[17px] font-medium">CLEAR CART</button>
                                    <button onClick={() => navigate('/checkout')} style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="border w-50 font-medium">ORDER</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-60" src={emptyCart} />
                        <p className="text-[17px] text-gray-800 mb-10">Your cart is currently empty.</p>
                        <button onClick={() => navigate('/shop')} style={{backgroundColor: 'var(--background-color, #FFDB00)', fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className="p-3 w-40 text-[14px] font-semibold">RETURN TO SHOP</button>
                    </div>
                )
            }

            <Footer />
        </>
    )
}

export default Cart;