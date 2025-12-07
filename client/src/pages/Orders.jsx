import { useEffect } from "react";
import { useOrders } from "../context/OrderContext";
import { Link } from "react-router";

import orderImage from '../RideOn Images/10069.jpg';
import { useAuth } from "../context/AuthContext";
import Footer from "../components/Footer";

const Orders = () => {
    const { orders, getOrders, getAllOrder, updateOrderToShipped } = useOrders();
    const { user } = useAuth();

    useEffect(() => {
        getOrders();
    }, []);

    useEffect(() => {
        if(user?.role === 'admin'){
            getAllOrder();
        }
    }, []);

    return (
        <>
            <div className="flex items-center mb-15" style={{ backgroundImage: `url(${orderImage})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                <p style={{wordSpacing: '8px'}} className="p-3 pl-15 text-gray-400 text-[14px]">Home Page - <span style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className="text-white font-semibold text-[16px]">Orders</span></p>
            </div>
            <div>
                {user?.role === 'admin' ? (
                    orders.length >= 1 ? (
                        <div>
                            {orders.map((order) => (
                                <div className="w-full overflow-x-auto">
                                    <div className="flex flex-wrap max-w-full justify-between">
                                        <h1 style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className="font-semibold mb-5">USER ID: {order.userId}</h1>
                                        <p style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} onClick={() => updateOrderToShipped(order._id)}>UPDATE ORDER TO SHIPPED</p>
                                    </div>
                                    <table className="table-auto border border-gray-300 mb-10" style={{width: '100%'}}>
                                        <thead>
                                            <tr style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>
                                                <th className="border border-gray-300 p-1">BIKE ID</th>
                                                <th className="border border-gray-300 p-1">BIKE QUANTITY</th>
                                                <th className="border border-gray-300 p-1">BIKE PRICE</th>
                                                <th className="border border-gray-300 p-1">PAYMENT METHOD</th>
                                                <th className="border border-gray-300 p-1">PAYMENT STATUS</th>
                                                <th className="border border-gray-300 p-1">ADDRESS</th>
                                                <th className="border border-gray-300 p-1">SHIPPED</th>
                                                <th className="border border-gray-300 p-1">DELIVERY TIME</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.bikes.map((b) => (
                                                    <tr key={b._id}>
                                                        <td className="border border-gray-300 p-2 font-semibold" style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}><Link to={`/bikes/${b.bikeId}`}>{b.bikeId}</Link></td>
                                                        <td className="border border-gray-300 p-2">{b.quantity}</td>
                                                        <td className="border border-gray-300 p-2">{b.price}</td>
                                                        <td className="border border-gray-300 p-2">{order.paymentMethod}</td>
                                                        <td className="border border-gray-300 p-2">{order.paymentStatus === 'paid' ? "Paid" : order.paymentStatus === "pending" ? "Pending" : order.paymentStatus === 'not paid' ? "Not Paid" : order.paymentStatus === "failed" ? "Failed" : null}</td>
                                                        <td className="border border-gray-300 p-2">{order.address}</td>
                                                        <td className="border border-gray-300 p-2">{order.shipped ? "Yes" : "No"}</td>
                                                        <td className="border border-gray-300 p-2">{new Date(order.delivery).toLocaleDateString()}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>NO ORDERS</p>
                    )
                ) : (
                    orders.length >= 1 ? (
                        <div className="w-full overflow-x-auto">
                            <table className="table-auto border border-gray-300" style={{width: '100%'}}>
                                <thead>
                                    <tr style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>
                                        <th className="border border-gray-300 p-1">BIKE ID</th>
                                        <th className="border border-gray-300 p-1">BIKE QUANTITY</th>
                                        <th className="border border-gray-300 p-1">BIKE PRICE</th>
                                        <th className="border border-gray-300 p-1">PAYMENT METHOD</th>
                                        <th className="border border-gray-300 p-1">PAID</th>
                                        <th className="border border-gray-300 p-1">ADDRESS</th>
                                        <th className="border border-gray-300 p-1">SHIPPED</th>
                                        <th className="border border-gray-300 p-1">DELIVERY TIME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        order.bikes.map((b) => (
                                            <tr key={b._id}>
                                                <td className="border border-gray-300 p-2 font-semibold text-center" style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}><Link to={`/bikes/${b.bikeId}`}>{b.bikeId}</Link></td>
                                                <td className="border border-gray-300 p-2 text-center">{b.quantity}</td>
                                                <td className="border border-gray-300 p-2 text-center">{b.price}</td>
                                                <td className="border border-gray-300 p-2 text-center">{order.paymentMethod}</td>
                                                <td className="border border-gray-300 p-2 text-center">{order.paymentStatus === 'paid' ? "Paid" : order.paymentStatus === "pending" ? "Pending" : order.paymentStatus === 'not paid' ? "Not Paid" : order.paymentStatus === "failed" ? "Failed" : null}</td>
                                                <td className="border border-gray-300 p-2 text-center">{order.address}</td>
                                                <td className="border border-gray-300 p-2 text-center">{order.shipped ? "Yes" : "No"}</td>
                                                <td className="border border-gray-300 p-2 text-center">{new Date(order.delivery).toLocaleDateString()}</td>
                                            </tr>
                                        ))
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>YOUR ORDER HISTORY IS EMPTY</p>
                    )
                )}
            </div>
            <Footer />
        </>
    )
}

export default Orders;