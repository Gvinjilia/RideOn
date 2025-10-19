import { useEffect, useState } from "react";
import { useBikes } from "../context/BikeContext";
import { useCart } from "../context/CartContext";

import plus from '../RideOn Images/10047.svg';
import ReactPaginate from "react-paginate";
import star from '../RideOn Images/star (1).png';

import halfStar from '../RideOn Images/star (2).png'
import { useAuth } from "../context/AuthContext";

const Bikes = () => {
    const { getBikes, bikes, getBike, deleteBike } = useBikes();
    const { user } = useAuth();
    const { addToCart } = useCart();
    const [curPage, setCurPage] = useState(1);

    useEffect(() => {
        getBikes(curPage);
    }, [curPage]);

    const bikePerPage = 12;

    const data = bikes;
    
    const start = (curPage - 1) * bikePerPage;

    const paginated = data.slice(start, start + bikePerPage);

    const totalPages = Math.ceil(data.length / bikePerPage);
    
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5 ml-13">
                    <div className="flex flex-wrap justify-start ml-13">
                        {paginated.map((bike) => (
                            <div key={bike._id}>
                                <div onClick={() => getBike(bike._id)} className="border border-gray-300 p-3 h-120 flex flex-col justify-center">
                                    <div>
                                        <img src={bike.images[0]} width={350} />
                                    </div>
                                    <div className="ml-2 mt-5">
                                        <p className="text-gray-400 text-[14px]">{bike.type}</p>
                                        <p className="text-[25px] font-semibold pb-2" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>{bike.name}</p>
                                        <p className="text-[17px] font-normal" style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>${bike.price}</p>
                                        <p className="flex gap-1 mt-5">
                                            {[...Array(Math.floor(bike.rating > 0 ? bike.rating : null))].map((_, i) => (
                                                <img key={i} src={star} className="w-4"  />
                                            ))}
                                                
                                            {bike.rating % 1 !== 0 && (
                                                <img src={halfStar} className="w-4"  />
                                            )}
                                        </p>
                                    </div>
                                    <br />
                                    </div>
                                    <div className="flex items-center justify-between w-95 border p-4 border-gray-300">
                                        <button onClick={() => addToCart(bike)} style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className="font-semibold flex gap-3 justify-center items-center"><img src={plus} className="brightness-0 saturate-100 w-6 border-2 rounded-full"/>ADD TO CART</button>
                                        {
                                            user.role === 'admin' && (
                                                <button onClick={() => deleteBike(bike._id)}>DELETE BIKE</button>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="flex justify-center items-center">
                        <ReactPaginate className="flex mt-10 gap-5" breakLabel='...' pageCount={totalPages} forcePage={curPage - 1} onPageChange={(selected) => setCurPage(selected.selected + 1)} />
                    </div>
            </div>
        </>
    )
}

export default Bikes;