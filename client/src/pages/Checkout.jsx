import { useNavigate } from "react-router";
import { useOrders } from "../context/OrderContext";

import checkoutImage from '../RideOn Images/10069.jpg';

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

import Footer from "../components/Footer";

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

            <div className="lg:flex lg:flex-row lg:items-start md:flex md:flex-col md:items-center md:justify-center sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center gap-20 items-center">
                <form onSubmit={handleSubmit} className="lg:ml-30 lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col flex flex-col gap-15 lg:p-0 md:p-3 sm:p-3 p-3">
                    <div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="name" className="mb-2">YOUR NAME</label>
                            <input className="lg:w-220 md:w-full sm:w-full w-full p-3 bg-gray-100 font-semibold text-[14px]" id="name" type="name" name="name" placeholder="Name *" required />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="name" className="mb-2">COMPANY NAME (OPTIONAL)</label>
                            <input className="lg:w-220 md:w-full sm:w-full w-full p-3 bg-gray-100 font-semibold text-[14px]" id="name" type="name" name="name" placeholder="Company Name" />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="country" className="mb-2">COUNTRY</label>
                            <select className="lg:w-220 md:w-full sm:w-full w-full bg-gray-100 p-3 appearance-none" id="country">
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
                            <input type="address" id="address" name="address" className="lg:w-220 md:w-full sm:w-full w-full p-3 bg-gray-100 font-semibold text-[14px]" placeholder="Enter your address" required />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="state" className="mb-2">STATE</label>
                            <input type="text" id="state" name="state" className="lg:w-220 md:w-full sm:w-full w-full p-3 bg-gray-100 font-semibold text-[14px]" placeholder="State *"  required />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="email" className="mb-2">EMAIL</label>
                            <input type="email" id="email" name="email" className="lg:w-220 md:w-full sm:w-full w-full p-3 bg-gray-100 font-semibold text-[14px]"  placeholder="Email *"  required/>
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="phone" className="mb-2">PHONE</label>
                            <input type="number" id="phone" name="phone" className="lg:w-220 md:w-full sm:w-full w-full p-3 bg-gray-100 font-semibold text-[14px]"  placeholder="Phone *"  required />
                        </div>
                        <div className="flex flex-col mb-10">
                            <label htmlFor="notes" className="mb-2">ORDER NOTES</label>
                            <textarea type="text" id="notes" name="notes" className="lg:w-220 md:w-full sm:w-full w-full p-3 bg-gray-100 font-semibold text-[14px]" />
                        </div>
                    </div>

                    <div>
                        <div className="border border-gray-300 p-5 self-start lg:w-100 md:w-90 sm:w-90 w-80">
                            <p className="text-[30px] font-semibold mb-2" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>YOUR ORDER</p>
                            {
                                cart.map((item, index) => (
                                    <div key={index} className="flex lg:w-90 md:w-80 sm:w-70 w-70 justify-between text-[17px]" style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                    </div>
                                ))
                            }
                            <hr className="border border-gray-300 mt-5" />
                            <div className="flex lg:w-90 md:w-80 sm:w-70 w-70 justify-between text-[17px] pt-3 pb-2" style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>
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
                                                <input type="number" name="cardNumber1" id="cardNumber1" className="bg-gray-100 p-3 lg:w-90 md:w-80 sm:w-70 w-70 font-semibold text-[14px]" required />
                                            </div>
                                            <div className="flex flex-col gap-2 lg:w-90 md:w-80 sm:w-70 w-70">
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
                                                    <input type="number" name="number" placeholder="1" required className="bg-gray-100 lg:w-45 md:w-40 sm:w-35 w-35 p-3" />
                                                    <input type="year" name="year" placeholder="2025" required className="bg-gray-100 p-3 lg:w-45 md:w-40 sm:w-35 w-35" />
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <p>Card Verification Number (CVV)</p>
                                                <input type="number" name="cardNumber" id="cardNumber" className="bg-gray-100 p-3 lg:w-90 md:w-80 sm:w-70 w-70 font-semibold text-[14px]" required />
                                            </div>
                                        </>
                                    )
                                }
                                <button type="submit" style={{backgroundColor: 'var(--background-color, #FFDB00)', fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className="p-3 text-[17px] font-semibold lg:w-90 md:w-80 sm:w-70 w-70">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Checkout;