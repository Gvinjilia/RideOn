import { useEffect, useState } from "react";
import { useBikes } from "../context/BikeContext";
import { useCart } from "../context/CartContext";

import ReactPaginate from 'react-paginate';

import shopImage from '../RideOn Images/10069.jpg';
import plus from '../RideOn Images/10047.svg';

import x from '../RideOn Images/10001 (1).svg';

import star from '../RideOn Images/star (1).png';
import halfStar from '../RideOn Images/star (2).png';
import { useAuth } from "../context/AuthContext";
import Footer from "../components/Footer";

const Shop = () => {
    const { bikes, getBike, getBikes, deleteBike, addBike, updateBike } = useBikes();
    const { user } = useAuth();
    const { addToCart } = useCart();
    const [checkboxValue, setCheckboxValue] = useState([]);
    const [checkboxBrandValue, setCheckboxBrandValue] = useState([]);
    const [price, setPrice] = useState(10000);
    const [toggle, setToggle] = useState({'categories': true, 'brands': true, 'price': true, 'rating': true});
    const [rating, setRating] = useState([]);
    const [curPage, setCurPage] = useState(1);
    const [appliedFilters, setAppliedFilters] = useState({types: [], brands: [], price: 10000, rating: []});
    const [toggleInputs, setToggleInputs] = useState(false);
    const [toggleForm, setToggleForm] = useState({});

    const types = [];

    for(let bike of bikes){
        if(!types.includes(bike.type)){
            types.push(bike.type)
        }
    }

    const brands = [];

    for(let bike of bikes){
        if(!brands.includes(bike.brand)){
            brands.push(bike.brand)
        }
    }


    const handleClick = (e) => {
        const checked = e.target.checked;
        const name = e.target.id;

        if(checked){
            setCheckboxValue([...checkboxValue, name]);
        } else {
            setCheckboxValue(checkboxValue.filter((item) => item !== name));
        }
    }

    const handleBrandClick = (e) => {
        const checked = e.target.checked;
        const name = e.target.id;

        if(checked){
            setCheckboxBrandValue([...checkboxBrandValue, name]);
        } else {
            setCheckboxBrandValue(checkboxBrandValue.filter((item) => item !== name));
        }
    }

    const handleRatingClick = (e) => {
        const checked = e.target.checked;
        const name = e.target.id;

        if(checked){
            setRating([...rating, name])
        } else {
            setRating(rating.filter((rating) => rating !== name));
        }
    }

    const clearFilters = () => {
        setCheckboxValue([]);
        setCheckboxBrandValue([]);
        setRating([]);
        setPrice(10000);
        setCurPage(1);
        setAppliedFilters({types: [], brands: [], price: 10000, rating: []})
    }

    const close = (key) => {
        setToggle((prev) => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    const filtering = () => {
        setAppliedFilters({
            types: checkboxValue,
            brands: checkboxBrandValue,
            price: price,
            rating: rating
        });

        setCurPage(1);
    }

    const bikePerPage = 12;

    const data = bikes.filter(bike => appliedFilters.types.length === 0 || appliedFilters.types.includes(bike.type)).filter((bike) => appliedFilters.brands.length === 0 || appliedFilters.brands.includes(bike.brand)).filter(bike => bike.price <= appliedFilters.price).filter(bike => appliedFilters.rating.length === 0 || appliedFilters.rating.includes(String(bike.rating)));
    
    const start = (curPage - 1) * bikePerPage;

    const paginated = data.slice(start, start + bikePerPage);

    const totalPages = Math.ceil(data.length / bikePerPage);

    useEffect(() => {
        getBikes();
    }, []);

    const handleBikeInputs = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            brand: e.target.brand.value,
            type: e.target.type.value,
            price: e.target.price.value,
            description: e.target.description.value,
            images: [e.target.images.value],
            stock: e.target.stock.value,
            rating: e.target.rating.value
        }

        addBike(data);

        e.target.reset();
    };

    const handleUpdate = (e, bikeId) => {
        e.preventDefault();
        
        let data = {}


        for(let field of e.target.elements){
            if(field.name && field.value !== ''){
                if(field.name === 'images'){
                    data[field.name] = [field.value]
                }

                data[field.name] = field.value
            }
        }

        updateBike(data, bikeId);
        setToggleForm(false);
    };

    return (
        <>
            <div className="lg:h-120 flex items-center mb-15" style={{ backgroundImage: `url(${shopImage})`, backgroundColor: 'rgba(0, 0, 0, 0.3)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                <p className="ml-20 lg:text-[70px] md:text-[50px] sm:text-[50px] text-[40px] text-white font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>SHOP</p>
            </div>
            <div className="lg:pl-5 md:pl-5 sm:pl-5 lg:flex lg:flex-row md:flex md:flex-row md:items-start sm:flex sm:flex-col lg:items-start flex flex-col " style={{maxWidth: '1650px'}}>
                <div className="lg:ml-30 md:ml-5 sm:pl-5 pl-4">
                    <div className="border flex justify-between p-3 pr-5 mt-5 w-70 mb-5">
                        <h1 className="text-[19px] pl-2 font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>CATEGORIES</h1>
                        <img src={x} onClick={() => close('categories')} style={{transform: toggle.categories ? 'rotate(0deg)' : 'rotate(45deg)', transition: 'transform 0.3s ease'}} />
                    </div>
                    {
                        types.map((bike) => (
                            <div style={{display: toggle.categories ? 'block' : 'none'}}>
                                <div className="flex gap-3">
                                    <input type="checkbox" id={bike} onChange={(e) => handleClick(e)} checked={checkboxValue.includes(bike)} />
                                    <label htmlFor={bike}>{bike}</label>
                                </div>
                            </div>
                        ))
                    }

                    <div className="border flex justify-between p-3 pr-5 mt-5 w-70 mb-5">
                        <h1 className="text-[19px] pl-2 font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>PRODUCT BRANDS</h1>
                        <img src={x} onClick={() => close('brands')} style={{transform: toggle.brands ? 'rotate(0deg)' : 'rotate(45deg)', transition: 'transform 0.3s ease'}} />
                    </div>
                    {
                        brands.map((bike) => (
                            <div style={{display: toggle.brands ? 'block' : 'none'}}>
                                <div className="flex gap-3">
                                    <input type="checkbox" id={bike} onChange={(e) => handleBrandClick(e)} checked={checkboxBrandValue.includes(bike)} />
                                    <label htmlFor={bike}>{bike}</label>
                                </div>
                            </div>
                        ))
                    }

                    <div className="border flex justify-between p-3 pr-5 mt-5 w-70 mb-5">
                        <h1 className="text-[19px] pl-2 font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>PRICE</h1>
                        <img src={x} onClick={() => close('price')} style={{transform: toggle.price ? 'rotate(0deg)' : 'rotate(45deg)', transition: 'transform 0.3s ease'}} />
                    </div>
                    <div style={{display: toggle.price ? 'block' : 'none'}}>
                        <input type="range" onChange={(e) => setPrice(e.target.value)} max="6000" step="100" min="500" className="w-70" value={price} />
                        <div className="flex justify-between">
                            <p><span className="text-gray-500 font-semibold">Price: </span>$500 - ${price}</p>
                        </div>
                    </div>
                    <div className="border flex justify-between p-3 pr-5 mt-5 w-70 mb-5">
                        <h1 className="text-[19px] pl-2 font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>RATING</h1>
                        <img src={x} onClick={() => close('rating')} style={{transform: toggle.rating ? 'rotate(0deg)' : 'rotate(45deg)', transition: 'transform 0.3s ease'}} />
                    </div>
                    <div style={{display: toggle.rating ? 'block' : 'none'}}>
                        <div className="flex flex-col mb-3 gap-2">
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" id="1" onChange={handleRatingClick} checked={rating.includes('1')} />
                                <label htmlFor="1" className="flex gap-1">
                                    {[...Array(Math.floor(5 > 0 ? 5 : null))].map((_, i) => (
                                        <img key={i} src={star} className="w-4" />
                                    ))}
                                </label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" id="2" onChange={handleRatingClick} checked={rating.includes('2')} />
                                <label htmlFor="2" className="flex gap-1">
                                    {[...Array(Math.floor(4 > 0 ? 4 : null))].map((_, i) => (
                                        <img key={i} src={star} className="w-4" />
                                    ))}
                                </label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" id="3" onChange={handleRatingClick} checked={rating.includes('3')} />
                                <label htmlFor="3" className="flex gap-1">
                                    {[...Array(Math.floor(3 > 0 ? 3 : null))].map((_, i) => (
                                        <img key={i} src={star} className="w-4" />
                                    ))}
                                </label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" id="4" onChange={handleRatingClick} checked={rating.includes('4')} />
                                <label htmlFor="4" className="flex gap-1">
                                    {[...Array(Math.floor(2 > 0 ? 2 : null))].map((_, i) => (
                                        <img key={i} src={star} className="w-4" />
                                    ))}
                                </label>
                            </div>
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" id="5" onChange={handleRatingClick} checked={rating.includes('5')} />
                                <label htmlFor="5" className="flex gap-1">
                                    {[...Array(Math.floor(1 > 0 ? 1 : null))].map((_, i) => (
                                        <img key={i} src={star} className="w-4" />
                                    ))}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center sm:w-70 w-70">
                        <button onClick={() => clearFilters()}>Clear filters</button>
                        <button className="font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} onClick={filtering}>FILTER</button>
                    </div>
                    {
                        user?.role === 'admin' && (
                            <div>
                                <button style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="text-[19px] flex border mt-5 p-2 w-70 justify-center" onClick={() => setToggleInputs((prev) => !prev)}>ADD PRODUCT</button>

                                <div className="flex items-center mt-10">
                                    {
                                        toggleInputs && (
                                            <form onSubmit={handleBikeInputs} className="flex flex-col gap-5">
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-[19px] font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} htmlFor="bikeInput1">PRODUCT NAME</label>
                                                    <input id="bikeInput1" className="border w-70 p-2" type="name" name="name" placeholder="Enter PRODUCT Name:" required />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-[19px] font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} htmlFor="bikeInput2">PRODUCT BRAND</label>
                                                    <input id="bikeInput2" className="border w-70 p-2" type="text" name="brand" placeholder="Enter PRODUCT brand:" required />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-[19px] font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} htmlFor="bikeInput3">PRODUCT TYPE</label>
                                                    <input id="bikeInput3" className="border w-70 p-2" type="text" name="type" placeholder="Enter PRODUCT type: " required />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-[19px] font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} htmlFor="bikeInput4">PRODUCT PRICE</label>
                                                    <input id="bikeInput4" className="border w-70 p-2" type="number" name="price" max={10000} placeholder="Enter PRODUCT Price: " required />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-[19px] font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} htmlFor="bikeInput5">PRODUCT DESCRIPTION</label>
                                                    <textarea id="bikeInput5" className="border w-70 p-2" type="text" name="description" placeholder="Enter description For PRODUCT: " required />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-[19px] font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} htmlFor="bikeInput6">PRODUCT IMAGE</label>
                                                    <input id="bikeInput6" className="border w-70 p-2" type="text" name="images" placeholder="Enter PRODUCT image URL: " required />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-[19px] font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} htmlFor="bikeInput7">PRODUCT STOCK</label>
                                                    <input id="bikeInput7" className="border w-70 p-2" type="number" name="stock" placeholder="Enter PRODUCT Stock: " required />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-[19px] font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} htmlFor="bikeInput8">PRODUCT RATING</label>
                                                    <input id="bikeInput8" className="border w-70 p-2" type="number" step='0.1' min='0' max='5' name="rating" placeholder="Enter PRODUCT Rating: " required />
                                                </div>

                                                <button style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', backgroundColor: '#FFDB00'}} className="text-[19px] flex mt-5 p-2 w-70 justify-center">SUBMIT</button>
                                            </form>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="lg:flex-1 flex flex-col justify-center items-start">
                    <h2 className="lg:ml-13 md:ml-12 sm:ml-5 ml-4 mt-7 mb-2 text-gray-500 text-[14px]">Showing {data.length} {data.length !== 1 ? 'products' : 'product'}</h2>
                    <div className="flex flex-wrap justify-center items-center lg:justify-start lg:ml-13 md:ml-11 sm:ml-0">   
                        {paginated.length > 0 ? (
                            paginated.map((bike) => (
                                <div key={bike._id}>
                                    {
                                        !toggleForm[bike._id] ? (
                                            <div className="border border-gray-300 p-3 flex flex-col justify-center lg:w-95 md:w-80 sm:w-70 w-70" style={{height: toggleForm[bike._id] ? '480px' : '580px'}}>
                                                <div onClick={() => getBike(bike._id)}>
                                                    <img src={bike?.images[0]} width={350} />
                                                </div>
                                                <div className="ml-2 mt-5 flex flex-col justify-center">
                                                    <p className="text-gray-400 text-[14px]">{bike.type}</p>
                                                    <p className="text-[25px] font-semibold pb-2 break-words" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>{bike.name}</p>
                                                    <p className="text-[17px] font-normal" style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>${bike.price}</p>
                                                    <p className="flex gap-1 mt-5">
                                                        {[...Array(Math.floor(bike.rating > 0 ? bike.rating : null))].map((_, i) => (
                                                            <img key={i} src={star} className="w-4" />
                                                        ))}
                                                        
                                                        {bike.rating % 1 !== 0 && (
                                                            <img src={halfStar} className="w-4" />
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="ml-2 mt-10">
                                                    {
                                                        user?.role === 'admin' && (
                                                            <button className="border p-1 w-25" style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} onClick={() => setToggleForm(prev => ({
                                                                ...prev, [bike._id]: !prev[bike._id]
                                                            }))}>UPDATE</button>
                                                        )
                                                    }
                                                </div>
                                                <br />
                                            </div>
                                        ) : (
                                            <div className="border border-gray-300 p-3 h-145 flex flex-col justify-center">
                                                <form className="flex flex-col gap-5 ml-5" onSubmit={(e) => handleUpdate(e, bike._id)}>
                                                    <input className="border lg:w-70 md:w-60 sm:w-50 w-50 p-2" type="text" name="images" placeholder="Enter Image URL: " />
                                                    <input className="border lg:w-70 md:w-60 sm:w-50 w-50 p-2" type="text" name="type" placeholder="Enter PRODUCT type: " />
                                                    <input className="border lg:w-70 md:w-60 sm:w-50 w-50 p-2" type="text" name="brand" placeholder="Enter PRODUCT brand: " />
                                                    <input className="border lg:w-70 md:w-60 sm:w-50 w-50 p-2" type="number" name="price" max={10000} placeholder="Enter PRODUCT Price: " />
                                                    <input className="border lg:w-70 md:w-60 sm:w-50 w-50 p-2" type="number" name="stock" placeholder="Enter PRODUCT Stock: " />
                                                    <input className="border lg:w-70 md:w-60 sm:w-50 w-50 p-2" type="text" name="description" placeholder="Enter PRODUCT Description: "  />
                                                    <input className="border lg:w-70 md:w-60 sm:w-50 w-50 p-2" type="number" step='0.1' min='0' max='5' name="rating" placeholder="Enter PRODUCT Rating: " />

                                                    <button style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', backgroundColor: '#FFDB00'}} className="text-[19px] flex p-2 lg:w-70 md:w-60 sm:w-50 w-50 justify-center">SUBMIT</button>
                                                </form>
                                                <div className="flex ml-5 mt-5">
                                                    <button onClick={() => setToggleForm(prev => ({...prev, [bike._id]: false }))} style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="border text-[18px] p-2 lg:w-70 md:w-60 sm:w-50 w-50">CANCEL</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className="flex items-center justify-between lg:w-95 md:w-80 sm:w-70 w-70 border p-4 border-gray-300">
                                        <button onClick={() => addToCart(bike)} style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className="font-semibold flex gap-3 justify-center items-center"><img src={plus} className="brightness-0 saturate-100 w-6 border-2 rounded-full"/>ADD TO CART</button>
                                        {
                                            user?.role === 'admin' && (
                                                <button style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} onClick={() => deleteBike(bike._id)}>DELETE PRODUCT</button>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No bikes found</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mb-20">
                <ReactPaginate className="flex mt-10 gap-5" breakLabel='...' pageCount={totalPages} forcePage={curPage - 1} onPageChange={(selected) => setCurPage(selected.selected + 1)} />
            </div>
            <Footer />
        </>
    )
}

export default Shop;