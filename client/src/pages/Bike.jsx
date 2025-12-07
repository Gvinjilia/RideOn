import { useParams } from "react-router";
import { useBikes } from "../context/BikeContext";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

import shopImage from '../RideOn Images/10069.jpg';
import socialMedia from '../RideOn Images/images-removebg-preview.png';

import plus from '../RideOn Images/10047.svg';

import emailLogo from '../RideOn Images/email.webp';
import call from '../RideOn Images/Call (2).png';
import facebook from '../RideOn Images/Facebook circle.svg';
import twitter from '../RideOn Images/Twitter alt.svg';
import instagram from '../RideOn Images/Instagram icon.svg';
import pinterest from '../RideOn Images/Pinterest p.svg';
import youtube from '../RideOn Images/Youtube filled.svg';
import cards from '../RideOn Images/10048.png';

import star from '../RideOn Images/star (1).png';
import halfStar from '../RideOn Images/star (2).png';
import { useReviews } from "../context/ReviewContext";
import { useAuth } from "../context/AuthContext";
import Footer from "../components/Footer";

const Bike = () => {
    const {bike, getBike, bikes} = useBikes();
    const {bikeId} = useParams();
    const {addToCart} = useCart();
    const {getReviews, reviews, addReview, removeReview} = useReviews();
    const [quantity, setQuantity] = useState(1);
    const [filtered, setFiltered] = useState([]);
    const [activate, setActivate] = useState('description');
    const { user } = useAuth();

    useEffect(() => {
        getBike(bikeId);
        getReviews(bikeId)
    }, [bikeId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target)

        const formObj = {
            rating: e.target.rating.value,
            comment: e.target.comment.value
        }

        addReview(formObj, bikeId);

        e.target.reset();
    };
    

    useEffect(() => {
        const filtered = bikes.filter((b) => b.type === bike.type && b._id !== bike._id);

        setFiltered(filtered);
    }, [bike]);


    return (
        <>
            <div>
                <div className="flex items-center lg:mb-15" style={{ backgroundImage: `url(${shopImage})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                    <p style={{wordSpacing: '8px'}} className="p-3 pl-15 text-gray-400 text-[14px]">Home - Page - Shop - {bike.type} - <span style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className="text-white font-semibold text-[16px]">{bike.name}</span></p>
                </div>
                <div className="lg:p-0 md:p-5 sm:p-5 p-5 lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col flex flex-col justify-center lg:gap-25 md:gap-10 sm:gap-10 items-center mb-10">
                    <img src={bike?.images?.[0]} className="lg:w-200 md:w-110 sm:w-auto w-auto lg:mb-0 md:mb-0 sm:mb-5 mb-5" />
                    <div>
                        <div className="ml-2">
                            <div className="mb-5">
                                <p className="bg-green-500 w-17 flex justify-center text-white text-[12px] font-semibold">{bike.stock > 1 ? 'IN STOCK' : 'OUT OF STOCK'}</p>
                                <p className="lg:text-[55px] md:text-[35px] sm:text-[50px] text-[30px] font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>{bike.name}</p>
                                <p className="mb-5 flex gap-1">
                                    {[...Array(Math.floor(bike.rating > 0 ? bike.rating : null))].map((_, i) => (
                                        <img key={i} src={star} className="w-4" />
                                    ))}
                                    
                                    {bike.rating % 1 !== 0 && (
                                        <img src={halfStar} className="w-4" />
                                    )}
                                </p>
                                <hr className='w-full border-gray-300' />
                            </div>
                            <p style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="text-[23px] font-semibold mb-4">${bike.price}</p>
                            <p className='text-gray-700 mb-4 lg:w-110 md:w-auto sm:w-auto w-auto'>{bike.description}</p>
                            <div className="flex gap-4">
                                <div className="border p-2 lg:w-25 md:w-25 sm:w-30 w-40 flex justify-center gap-4 font-bold mb-10">
                                    <button onClick={() => setQuantity((prev) => prev - 1)} disabled={quantity === 1}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                                </div>
                                <button onClick={() => addToCart(bike, quantity)} className='lg:w-[250px] md:w-[180px] sm:w-full w-full h-[45px] text-[15px]' style={{backgroundColor: 'var(--background-color, #FFDB00)', fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>ADD TO CART</button>
                            </div>
                            <hr className='w-full border-gray-300 mb-4' />
                            <p className="text-gray-700 mb-4 text-[14px]">Category: <span>{bike.type}</span></p>
                        </div>
                        <img src={socialMedia} width={200} className="mr-10" />
                    </div>
                </div>
                <hr className='w-full border-gray-300' />
                <br />
                <div className="flex flex-col items-center w-full">
                    <div className="flex gap-15 justify-center">
                        <h1 onClick={() => setActivate((activate === 'description' ? null : 'description'))} style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="text-[20px] font-semibold mb-10">DESCRIPTION</h1>
                        <h1 onClick={() => setActivate((activate === 'reviews' ? null : 'reviews'))} style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="text-[20px] font-semibold mb-10">REVIEWS ({reviews.length})</h1>
                    </div>
                    <div className="lg:p-0 md:p-5 sm:p-5 p-3">
                        {
                            activate === 'description' && (
                                <div className="flex flex-col justify-center items-center mb-10">
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="text-gray-700 mb-10 lg:w-250 lg:text-start md:w-auto md:text-center sm:w-auto sm:text-center w-auto text-center">Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In hac habitasse platea dictumst. Sed cursus venenatis tellus, non lobortis diam volutpat sit amet.</p>
                                        <img src="https://demo2.wpopal.com/bikys/wp-content/uploads/2023/03/product_banner.jpeg" className="mb-10" />
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-start lg:ml-0 md:ml-7 sm:ml-7 ml-7">
                                            <p style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="text-[18px] font-semibold mb-4">FEATURES:</p>
                                        </div>
                                        <ul className="flex flex-col gap-5 text-gray-700 pl-10">
                                            <li className="lg:w-230 md:w-auto sm:w-auto w-auto">Fast and light – New Advanced composite frame and fork save more than 160 grams compared to previous model. Updated geometry includes a lower bottom bracket, longer reach and steeper headtube angle for improved acceleration and climbing.</li>
                                            <li className="lg:w-230 md:w-auto sm:w-auto w-auto">Tuned compliance – New frame features thinner, dropped seatstays to absorb road shocks and vibrations. D-Fuse handlebar and seatpost work as a system to add compliance without sacrificing stiffness while cornering, sprinting or climbing.</li>
                                            <li className="lg:w-230 md:w-auto sm:w-auto w-auto">Adaptable to the terrain – A flip chip on the rear dropout adjusts the wheelbase short for quicker handling, or long for improved stability at speed. The long setting allows for larger diameter tires up to 53mm. You can also choose the included D-Fuse seatpost for maximum compliance, or switch to a 30.9mm round or dropper post.</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                        {
                            activate === 'reviews' && (
                                <div className="lg:w-200 lg:p-0 md:p-5 sm:p-5 p-5">
                                    <h1 className="text-[20px] font-semibold mb-4">{reviews.length === 0 ? 'No reviews' : `${reviews.length} ${reviews.length > 1 ? 'reviews' : 'review'}`} for {bike.name.toUpperCase()}</h1>
                                    {
                                        reviews && reviews.length > 0 ? (
                                            <>
                                                {reviews.map((review, index) => (
                                                    <div key={index} className="flex lg:gap-5 md:gap-2 sm:gap-2 gap-2">
                                                        <img className="w-12 h-12 rounded-full" src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g" />
                                                        <div>
                                                            <p className="mb-5 flex gap-1">
                                                                {[...Array(Math.floor(review.rating))].map((_, i) => (
                                                                    <img key={i} src={star} className="w-4" />
                                                                ))}

                                                                {review.rating % 1 !== 0 && (
                                                                    <img src={halfStar} className="w-4" />
                                                                )}
                                                            </p>
                                                            <p className="pl-1 text-gray-400 font-medium text-[13px] mb-5">{new Date().toLocaleString('default', { month: 'long' })} {new Date().getDate()}, {new Date().getFullYear()}</p>
                                                            <p className="pl-1 mb-15">{review.comment}</p>
                                                            {
                                                                user.role === 'admin' && (
                                                                    <button onClick={() => removeReview(review._id)}>DELETE REVIEW</button>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                ))}

                                                <h1 style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="text-[30px] font-semibold">ADD A REVIEW</h1>
                                                <p className="text-gray-700 mb-5">Your email address will not be published. Required fields are marked <span className="text-red-500">*</span></p>
                                                <div className="flex gap-3 items-center">
                                                    <p className="mb-5">Your rating <span className="text-red-500">*</span></p>
                                                </div>
                                                <form onSubmit={handleSubmit}>
                                                    <input className="mb-5" type="number" step='0.1' min='0' max='5' name="rating" placeholder="Enter the rating" required />
                                                    <textarea className="lg:w-220 md:w-full sm:w-full w-full h-45 bg-gray-100 text-black font-semibold pl-5 pt-3 text-[14px] mb-5" type="text" name="comment" placeholder="Your review *" required />
                                                    <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col flex flex-col gap-5 lg:w-220 md:w-auto sm:w-auto w-auto mb-3">
                                                        <input className="lg:w-130 md:w-auto sm:w-auto w-auto p-3 bg-gray-100 text-black font-semibold text-[14px]" type="text" name="name" placeholder="Name *" required />
                                                        <input className="lg:w-130 md:w-auto sm:w-auto w-auto p-3 bg-gray-100 text-black font-semibold text-[14px]" type="email" name="email" placeholder="Email *" required />
                                                    </div>
                                                    <div className="flex gap-2 mb-5">
                                                        <input type="checkbox" id="review" />
                                                        <label htmlFor="review">Save my name, email, and website in this browser for the next time I comment.</label>
                                                    </div>

                                                    <button className="border p-3 w-35 text-[14px] font-semibold mb-10" type="submit">SUBMIT</button>
                                                </form>
                                            </>
                                        ) : (
                                            <div>
                                                <p className="mb-10">No reviews yet</p>
                                                <form onSubmit={handleSubmit}>
                                                    <input className="mb-5" type="number" step='0.1' min='0' max='5' name="rating" placeholder="Enter the rating" required />
                                                    <textarea className="lg:w-220 md:w-full sm:w-full w-full h-45 bg-gray-100 text-black font-semibold pl-5 pt-3 text-[14px] mb-5" type="text" name="comment" placeholder="Your review *" required />
                                                    <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col flex flex-col gap-5 lg:w-220 md:w-auto sm:w-auto w-auto mb-3">
                                                        <input className="lg:w-130 md:w-auto sm:w-auto w-auto p-3 bg-gray-100 text-black font-semibold text-[14px]" type="text" name="name" placeholder="Name *" required />
                                                        <input className="lg:w-130 md:w-auto sm:w-auto w-auto p-3 bg-gray-100 text-black font-semibold text-[14px]" type="email" name="email" placeholder="Email *" required />
                                                    </div>
                                                    <div className="flex gap-2 mb-5">
                                                        <input type="checkbox" id="review" />
                                                        <label htmlFor="review">Save my name, email, and website in this browser for the next time I comment.</label>
                                                    </div>

                                                    <button className="border p-3 w-35 text-[14px] font-semibold mb-10" type="submit">SUBMIT</button>
                                                </form>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
                <hr className='w-full border-gray-300' />
                <br />

                <div>
                    <div className="flex items-center lg:pl-10 md:pl-10 sm:pl-5 pl-0 mt-5 mb-5">
                        <div className='w-4 h-4 ml-6 mt-3' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}></div>
                        <h1 className='text-4xl font-bold mt-5 pl-3' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>RELATED PRODUCTS</h1>
                    </div>
                    <div className="flex flex-wrap lg:pl-16 md:pl-10 sm:pl-10 pl-5">
                        {filtered.length > 0 ? (
                            filtered.map((bike) => (
                                <div key={bike._id}>
                                    <div onClick={() => getBike(bike._id)} className="lg:w-95 md:w-90 sm:w-80 w-75 border border-gray-300 p-3 h-120 flex flex-col justify-center">
                                        <div>
                                            <img src={bike?.images[0]} width={350} />
                                        </div>
                                        <div className="ml-2 mt-5">
                                            <p className="text-gray-400 text-[14px]">{bike.type}</p>
                                            <p className="text-[25px] font-semibold pb-2" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>{bike.name}</p>
                                            <p className="text-[17px] font-normal mb-3" style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>${bike.price}</p>
                                            <p className="flex gap-1">
                                                {[...Array(Math.floor(bike.rating > 0 ? bike.rating : null))].map((_, i) => (
                                                    <img key={i} src={star} className="w-4"  />
                                                ))}
                                                
                                                {bike.rating % 1 !== 0 && (
                                                    <img src={star} className="w-4"  />
                                                )}
                                            </p>
                                        </div>
                                        <br />
                                    </div>
                                    <div className="border p-4 border-gray-300 lg:w-95 md:w-90 sm:w-80 w-75">
                                        <button onClick={() => addToCart(bike)} style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className="font-semibold flex gap-3 justify-center items-center"><img src={plus} className="brightness-0 saturate-100 w-6 border-2 rounded-full"/>ADD TO CART</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="pl-8 pt-5">No Related products found</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Bike;