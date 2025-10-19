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
                <div className="flex items-center mb-15" style={{ backgroundImage: `url(${shopImage})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                    <p style={{wordSpacing: '8px'}} className="p-3 pl-15 text-gray-400 text-[14px]">Home - Page - Shop - {bike.type} - <span style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className="text-white font-semibold text-[16px]">{bike.name}</span></p>
                </div>
                <div className="flex justify-center gap-25 items-center mb-10">
                    <img src={bike?.images?.[0]} width={800} />
                    <div>
                        <div className="ml-2">
                            <div className="mb-5">
                                <p className="bg-green-500 w-17 flex justify-center text-white text-[12px] font-semibold">{bike.stock > 1 ? 'IN STOCK' : 'OUT OF STOCK'}</p>
                                <p className="text-[55px] font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>{bike.name}</p>
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
                            <p className='text-gray-700 mb-4 w-110'>{bike.description}</p>
                            <div className="flex gap-4">
                                <div className="border p-2 w-25 flex justify-center gap-4 font-bold mb-10">
                                    <button onClick={() => setQuantity((prev) => prev - 1)} disabled={quantity === 1}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                                </div>
                                <button onClick={() => addToCart(bike, quantity)} className='w-[250px] h-[45px] text-[15px]' style={{backgroundColor: 'var(--background-color, #FFDB00)', fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>ADD TO CART</button>
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
                    <div>
                        {
                            activate === 'description' && (
                                <div className="flex flex-col justify-center items-center mb-10">
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="text-gray-700 mb-10">Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas <br /> lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In hac <br /> habitasse platea dictumst. Sed cursus venenatis tellus, non lobortis diam volutpat sit amet.</p>
                                        <img src="https://demo2.wpopal.com/bikys/wp-content/uploads/2023/03/product_banner.jpeg" className="mb-10" />
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-start">
                                            <p style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="text-[18px] font-semibold mb-4">FEATURES:</p>
                                        </div>
                                        <ul className="flex flex-col gap-5 text-gray-700 pl-10">
                                            <li>Fast and light – New Advanced composite frame and fork save more than 160 grams compared to previous model. Updated <br /> geometry includes a lower bottom bracket, longer reach and steeper headtube angle for improved acceleration and climbing.</li>
                                            <li>Tuned compliance – New frame features thinner, dropped seatstays to absorb road shocks and vibrations. D-Fuse handlebar and <br /> seatpost work as a system to add compliance without sacrificing stiffness while cornering, sprinting or climbing.</li>
                                            <li>Adaptable to the terrain – A flip chip on the rear dropout adjusts the wheelbase short for quicker handling, or long for improved <br /> stability at speed. The long setting allows for larger diameter tires up to 53mm. You can also choose the included D-Fuse seatpost <br /> for maximum compliance, or switch to a 30.9mm round or dropper post.</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                        {
                            activate === 'reviews' && (
                                <div className="w-200">
                                    <h1 className="text-[20px] font-semibold mb-4">{reviews.length === 0 ? 'No reviews' : `${reviews.length} ${reviews.length > 1 ? 'reviews' : 'review'}`} for {bike.name.toUpperCase()}</h1>
                                    {
                                        reviews && reviews.length > 0 ? (
                                            <>
                                                {reviews.map((review, index) => (
                                                    <div key={index}className="flex gap-5">
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
                                                    <textarea className="w-220 h-45 bg-gray-100 text-black font-semibold pl-5 pt-3 text-[14px] mb-5" type="text" name="comment" placeholder="Your review *" required />
                                                    <div className="flex gap-5 w-220 mb-3">
                                                        <input className="w-130 p-3 bg-gray-100 text-black font-semibold text-[14px]" type="text" name="name" placeholder="Name *" required />
                                                        <input className="w-130 p-3 bg-gray-100 text-black font-semibold text-[14px]" type="email" name="email" placeholder="Email *" required />
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
                                                    <textarea className="w-220 h-45 bg-gray-100 text-black font-semibold pl-5 pt-3 text-[14px] mb-5" type="text" name="comment" placeholder="Your review *" required />
                                                    <div className="flex gap-5 w-220 mb-3">
                                                        <input className="w-130 p-3 bg-gray-100 text-black font-semibold text-[14px]" type="text" name="name" placeholder="Name *" required />
                                                        <input className="w-130 p-3 bg-gray-100 text-black font-semibold text-[14px]" type="email" name="email" placeholder="Email *" required />
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
                    <div className="flex items-center pl-10 mt-5">
                        <div className='w-4 h-4 ml-6 mt-3' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}></div>
                        <h1 className='text-4xl font-bold mt-5 pl-3' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>RELATED PRODUCTS</h1>
                    </div>
                    <div className="flex pl-16">
                        {filtered.length > 0 ? (
                            filtered.map((bike) => (
                                <div key={bike._id} className="pt-5">
                                    <div onClick={() => getBike(bike._id)} className="w-95 border border-gray-300 p-3 h-100 flex flex-col justify-center">
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
                                    <div className="border p-4 border-gray-300 w-95">
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
            <div className="mt-20">
                <div className='flex p-15 gap-15 justify-center mb-15' style={{backgroundColor: 'var(--footer-bg-color, #F7F7F7)'}}>
                    <div className='flex flex-col justify-center items-center border-r border-gray-300'>
                        <div className='mr-20 text-center'>
                            <p className='mb-3 text-2xl font-semibold'>Excellent</p>
                            <div className='mb-2'>
                                <img src='https://i.pinimg.com/736x/a5/87/01/a587015b354bbf91e83f04e0b33388ab.jpg' width={150}/>
                            </div>
                            <p className='text-[13px]'>Based on 524 reviews</p>
                        </div>
                    </div>
                    <div>
                        <div className='mb-5'>
                            <img src='https://i.pinimg.com/736x/a5/87/01/a587015b354bbf91e83f04e0b33388ab.jpg' width={100} />
                        </div>
                        <p className='mb-2 text-[17px] font-semibold'>Good experience</p>
                        
                        <p className='mb-5 text-gray-700'>Best service I could have asked for. They <br /> went above and beyond to ensure I had <br /> everything I needed and gave me options <br /> at different price points.</p>
                        <p className='text-[17px] font-bold'>Derrick W.</p>
                        <p>30 Jul 2025</p>
                    </div>
                    <div>
                        <div className='mb-5'>
                            <img src='https://i.pinimg.com/736x/a5/87/01/a587015b354bbf91e83f04e0b33388ab.jpg' width={100} />
                        </div>
                        <p className='mb-2 text-[17px] font-semibold'>Great service</p>
                        
                        <p className='mb-5 text-gray-700'>First time customer buying a bike online. <br /> Everything went smoothly and response <br /> was quick. Bike arrived pre-tuned/checked <br /> and in well protected box.</p>
                        <p className='text-[17px] font-bold'>Wayne L.</p>
                        <p>2 Sep 2025</p>
                    </div>
                    <div>
                        <div className='mb-5'>
                            <img src='https://i.pinimg.com/736x/a5/87/01/a587015b354bbf91e83f04e0b33388ab.jpg' width={100} />
                        </div>
                        <p className='mb-2 text-[17px] font-semibold'>Good online bike shop</p>
                        
                        <p className='mb-5 text-gray-700'>The bike arrived professionally packed <br /> into the box. Protectors in place to protect <br /> the vulnerable components during transit.</p>
                        <p className='text-[17px] font-bold'>John C.</p>
                        <p>10 Sep 2025</p>
                    </div>
                </div>
                <div className='flex gap-30 pl-30 items-center mb-10'>
                    <div>
                        <p className='text-gray-400 font-semibold'>Need Support?</p>
                        <div className='flex gap-5'>
                            <img src='https://www.svgrepo.com/show/496378/messages-3.svg' width={30} />
                            <div>
                                <p className='text-[18px] font-semibold mb-1'>Chat via Messenger</p>
                                <p className='text-[14px] text-gray-400'>Mon-Fri, 9am-5pm</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <img src={call} width={30} className='h-8' />
                        <div>
                            <p className='text-[18px] font-semibold mb-1'>Call + (123) 124-5678</p>
                            <p className='text-[14px] text-gray-400'>Mon-Fri, 9am-5pm</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <img src={emailLogo} width={30} className='h-8' />
                        <div>
                            <p className='text-[18px] font-semibold mb-1'>Contact via Email</p>
                            <p className='text-[14px] text-gray-400'>Response may take up to 3 working days</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-gray-400 font-semibold'>Follow Us</p>
                        <div className='flex w-5 gap-5'>
                            <img src={facebook} />
                            <img src={twitter} />
                            <img src={pinterest} />
                            <img src={instagram} width={15} />
                            <img src={youtube} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <hr className='w-[1500px] border-gray-300 mb-10' />
                </div>
                <div className='flex justify-center items-center gap-40 mb-10'>
                    <div>
                        <p className='text-2xl w-24 font-semibold mb-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>INFORMATION</p> 

                        <p>About Us</p>
                        <p>Stores</p>
                        <p>Delivery</p>
                        <p>Returns</p>
                        <p>Click & Collect</p>
                        <p>News</p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold mb-5 leading-none' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>PURCHASE & DELIVERY</p>

                        <p>Shipping</p>
                        <p>Returns</p>
                        <p>Payments</p>
                        <p>Bike Finance</p>
                        <p>Warranty</p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold w-16 mb-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>SUPPORT</p>

                        <p>Contact us</p>
                        <p>Bike size guide</p>
                        <p>Electric bike</p>
                        <p>Knowledge</p>
                        <p>Bike knowledge</p>
                        <p>Store locator</p>
                    </div>
                    <div>
                        <p className='text-2xl w-21 font-semibold mb-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>CATEGORIES</p>

                        <p>Electric bikes</p>
                        <p>Mountain bikes</p>
                        <p>Folding bikes</p>
                        <p>Men's bikes</p>
                        <p>Ladies' bikes</p>
                        <p>Hybrid bikes</p>
                    </div>
                    <div>
                        <p className='text-2xl w-15 font-semibold mb-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)', borderBottom: '9px #FFDB00 solid', lineHeight: '1', marginBottom: '0.9rem'}}>BRANDS</p>

                        <p>Argon 18</p>
                        <p>Basso</p>
                        <p>Bianchi</p>
                        <p>BMC</p>
                        <p>Cannondale</p>
                        <p>Cervélo</p>
                    </div>
                    <div>
                        <p>Haibike</p>
                        <p>Kross</p>
                        <p>Look</p>
                        <p>Merida</p>
                        <p>Orbea</p>
                        <p>Pinarello</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <hr className='w-[1500px] border-gray-300 mb-10' />
                </div>
                <div className='flex w-[1600px] justify-between mb-10'>
                    <div className='pl-24'>
                        <p>Copyright &copy; {new Date().getFullYear()} RideOn. All rights reserved</p>
                    </div>

                    <img src={cards} />
                </div>
            </div>
        </>
    )
}

export default Bike;