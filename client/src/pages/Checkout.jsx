import { useNavigate } from "react-router";
import { useOrders } from "../context/OrderContext";

import checkoutImage from '../RideOn Images/10069.jpg';

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

import cards from '../RideOn Images/10048.png';
import call from '../RideOn Images/Call (2).png';
import emailLogo from '../RideOn Images/email.webp';
import facebook from '../RideOn Images/Facebook circle.svg';
import instagram from '../RideOn Images/Instagram icon.svg';
import pinterest from '../RideOn Images/Pinterest p.svg';
import twitter from '../RideOn Images/Twitter alt.svg';
import youtube from '../RideOn Images/Youtube filled.svg';

const Checkout = () => {
    const { getTheItemToOrder } = useOrders();
    const navigate = useNavigate();
    const { cart, totalPrice } = useCart();
    const [countries, setCountries] = useState([]);
    const [cashValue, setCashValue] = useState(true);
    const [cardValue, setCardValue] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let paymentMethod = 'cash';

        const cardCheckbox = e.target.card.checked;

        if(cardCheckbox){
            paymentMethod = 'card';
        }

        const orderData = {
            paymentMethod,
            address: e.target.address.value
        }

        console.log(orderData);

        getTheItemToOrder(orderData);
        navigate('/orders');
    }


    useEffect(() => {
            setCountries([
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
                "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
                "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
                "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
                "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
                "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia", "Fiji", "Finland", "France",
                "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
                "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
                "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
                "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
                "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
                "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal",
                "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
                "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
                "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
                "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
                "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
                "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
                "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
                "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
            ]);
    }, []);

    const handleCashClick = (e) => {
        const checked = e.target.checked;

        if(checked){
            setCardValue(false);
        }

        setCashValue((prev) => !prev);
    }

    const handleCardClick = (e) => {
        const checked = e.target.checked;

        if(checked){
            setCashValue(false)
        }

        setCardValue((prev) => !prev);
    }

    return (
        <>
            <div className="flex items-center mb-15" style={{ backgroundImage: `url(${checkoutImage})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                <p style={{wordSpacing: '8px'}} className="p-3 pl-15 text-gray-400 text-[14px]">Home - <span className="text-[18px] text-white" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>Checkout</span></p>
            </div>

            <div className="flex gap-20 items-start">
                <form onSubmit={handleSubmit} className="ml-30 flex gap-15">
                    <div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="name" className="mb-2">YOUR NAME</label>
                            <input className="w-220 p-3 bg-gray-100 font-semibold text-[14px]" id="name" type="name" name="name" placeholder="Name *" required />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="name" className="mb-2">COMPANY NAME (OPTIONAL)</label>
                            <input className="w-220 p-3 bg-gray-100 font-semibold text-[14px]" id="name" type="name" name="name" placeholder="Company Name" />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="country" className="mb-2">COUNTRY</label>
                            <select className="w-220 bg-gray-100 p-3 appearance-none" id="country">
                                <option value='' disabled selected>SELECT THE COUNTRY</option>
                                {
                                    countries.map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="address" className="mb-2">ADDRESS</label>
                            <input type="address" id="address" name="address" className="w-220 p-3 bg-gray-100 font-semibold text-[14px]" placeholder="Enter your address" required />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="state" className="mb-2">STATE</label>
                            <input type="text" id="state" name="state" className="w-220 p-3 bg-gray-100 font-semibold text-[14px]" placeholder="State *"  required />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="email" className="mb-2">EMAIL</label>
                            <input type="email" id="email" name="email" className="w-220 p-3 bg-gray-100 font-semibold text-[14px]"  placeholder="Email *"  required/>
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="phone" className="mb-2">PHONE</label>
                            <input type="number" id="phone" name="phone" className="w-220 p-3 bg-gray-100 font-semibold text-[14px]"  placeholder="Phone *"  required />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="notes" className="mb-2">ORDER NOTES</label>
                            <textarea type="text" id="notes" name="notes" className="w-220 p-3 bg-gray-100 font-semibold text-[14px]" />
                        </div>
                    </div>

                    <div className="border border-gray-300 w-100 p-5 self-start">
                        <p className="text-[30px] font-semibold mb-2" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>YOUR ORDER</p>
                        {
                            cart.map((item, index) => (
                                <div key={index} className="flex w-90 justify-between text-[17px]" style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                </div>
                            ))
                        }
                        <hr className="border border-gray-300 mt-5" />
                        <div className="flex w-90 justify-between text-[17px] pt-3 pb-2" style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>
                            <p>Total</p>
                            <p>${totalPrice}</p>
                        </div>
                        <hr className="border border-gray-300 mb-5" />
                        <h1 style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className="text-[19px] font-semibold mb-2">PAYMENT METHOD</h1>
                        <div className="flex flex-col">
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" name="cash" checked={cashValue === true} onClick={(e) => handleCashClick(e)} id="cash" className="rounded-full appearance-none w-4 h-4 border checked:bg-[var(--background-color)]" />
                                <label htmlFor="cash" className="mb-2">Cash</label>
                            </div>
                            <div className="flex gap-2 items-center mb-5">
                                <input type="checkbox" name="card" checked={cardValue === true} onClick={(e) => handleCardClick(e)} id="card" className="rounded-full appearance-none w-4 h-4 border checked:bg-[var(--background-color)]" />
                                <label htmlFor="card">Card</label>
                            </div>

                            {
                                cardValue && (
                                    <>
                                        <div>
                                            <label htmlFor="cardNumber1">CARD NUMBER</label>
                                            <input type="number" name="cardNumber1" id="cardNumber1" className="bg-gray-100 p-3 w-90 font-semibold text-[14px]" required />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="cardType">CARD TYPE</label>
                                            <select id="cardType" className="bg-gray-100 p-3 appearance-none">
                                                <option value='Visa'>Visa</option>
                                                <option value='Master card'>Master Card</option>
                                                <option value='Discover'>Discover</option>
                                                <option value='American Express'>American Express</option>
                                            </select>
                                        </div>
                                        <div>
                                            <p className="mb-2">EXPIRATION DATE</p>
                                            <div className="flex">
                                                <input type="number" name="number" placeholder="1" required className="bg-gray-100 w-45 p-3" />
                                                <input type="year" name="year" placeholder="2025" required className="bg-gray-100 p-3 w-45" />
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <p>Card Verification Number (CVV)</p>
                                            <input type="number" name="cardNumber" id="cardNumber" className="bg-gray-100 p-3 w-90 font-semibold text-[14px]" required />
                                        </div>
                                    </>
                                )
                            }
                            <button type="submit" style={{backgroundColor: 'var(--background-color, #FFDB00)', fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="p-3 text-[17px] font-semibold">PLACE ORDER</button>
                        </div>
                    </div>
                </form>
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

export default Checkout;