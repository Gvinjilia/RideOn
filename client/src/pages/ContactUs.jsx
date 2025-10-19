import cards from '../RideOn Images/10048.png';
import ContactUsImage from '../RideOn Images/10099.jpg';
import call from '../RideOn Images/Call (2).png';
import contactUsBike from '../RideOn Images/contactUsBike.png';
import emailLogo from '../RideOn Images/email.webp';
import facebook from '../RideOn Images/Facebook circle.svg';
import instagram from '../RideOn Images/Instagram icon.svg';
import pinterest from '../RideOn Images/Pinterest p.svg';
import twitter from '../RideOn Images/Twitter alt.svg';
import youtube from '../RideOn Images/Youtube filled.svg';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        name = e.target.name.value

        alert(`${name} we will contact you as soon as possible!`)

        e.target.reset();
    } 

    return (
        <>
            <div className="h-125 mb-20" style={{ backgroundImage: `url(${ContactUsImage})`, backgroundColor: 'rgba(0, 0, 0, 0.4)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                <p style={{wordSpacing: '8px'}} className="p-3 pl-20 text-gray-400 text-[14px]">Home Page - <span className="text-white font-semibold text-[16px]">Contact</span></p>
                <div className="flex justify-center items-center">
                    <hr className="border-gray-500 w-385" />
                </div>
                <div className="flex items-center h-full">
                    <p className="ml-20 text-[70px] text-white font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>CONTACT</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                    <div className='ml-20'>
                        <h1 className="leading-none text-[50px] font-semibold mb-5" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>HOW CAN WE <br /> HELP YOU?</h1>
                        <p className='text-gray-800 mb-5'>Box 565, Pinney’s Beach, <br /> Charlestown,Nevis, West Indies, <br /> Caribbean</p>
                        <p className='text-[30px] font-semibold mb-5' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>TEL: +123 456 789 01 02</p>
                        <p className='text-[20px]' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>support_info@example.com</p>
                        <p className='text-[20px] mb-5' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>product_purchase@example.com</p>
                    </div>
                    <img src={contactUsBike} width={670} />
                </div>
                <div>
                    <p className="leading-none text-[50px] font-semibold mb-5" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>GET IN TOUCH</p>
                    <p className='text-gray-800 mb-5'>Welcome to our help center. If you have any questions, you are in the right place! <br />
                    Just fill out the form below. Our bike experts are available from 9-6, Monday to Friday.</p>

                    <form onSubmit={handleSubmit}>
                        <input name='name' type='text' placeholder='First Name *' required className="w-80 p-3 bg-gray-100 font-semibold text-[14px] mr-5" />
                        <input name='lastname' type='text' placeholder='Last Name *' required className="w-80 p-3 bg-gray-100 font-semibold text-[14px] mr-5" />
                        <input name='subject' type='text' placeholder='Subject' required className="w-75 p-3 bg-gray-100 font-semibold text-[14px] mb-5" />
                        <br />
                        <textarea name='message' placeholder='Message' required className="w-245 h-50 p-3 bg-gray-100 font-semibold text-[14px] mb-5"></textarea>

                        <button className='border w-30 p-2 text-[14px]'>SUBMIT</button>
                    </form>
                </div>
            </div>
            <div>
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

export default ContactUs;