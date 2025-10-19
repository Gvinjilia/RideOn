import aboutUsImage from '../RideOn Images/10099.jpg';
import wheel from '../RideOn Images/10101.jpg';

import bike from '../RideOn Images/bike.png';
import accessories from '../RideOn Images/accessories.png';
import gear from '../RideOn Images/gear.png';

import photo from '../RideOn Images/10102.jpg';
import check from '../RideOn Images/check (4).png';

import icon from '../RideOn Images/icon.png';
import icon2 from '../RideOn Images/icon2.png';
import cards from '../RideOn Images/10048.png';
import call from '../RideOn Images/Call (2).png';
import emailLogo from '../RideOn Images/email.webp';
import facebook from '../RideOn Images/Facebook circle.svg';
import instagram from '../RideOn Images/Instagram icon.svg';
import pinterest from '../RideOn Images/Pinterest p.svg';
import twitter from '../RideOn Images/Twitter alt.svg';
import youtube from '../RideOn Images/Youtube filled.svg';

const About = () => {
    return (
        <>
            <div className="h-125 mb-20" style={{ backgroundImage: `url(${aboutUsImage})`, backgroundColor: 'rgba(0, 0, 0, 0.4)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                <p style={{wordSpacing: '8px'}} className="p-3 pl-20 text-gray-400 text-[14px]">Home Page - <span className="text-white font-semibold text-[16px]">Our story</span></p>
                <div className="flex justify-center items-center">
                    <hr className="border-gray-500 w-385" />
                </div>
                <div className="flex items-center h-full">
                    <p className="ml-20 text-[70px] text-white font-semibold" style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>OUR STORY</p>
                </div>
            </div>
            <div className='ml-20 flex gap-15 mb-20'>
                <div className='relative'>
                    <img src={wheel} />
                </div>

                <div>
                    <p className='mt-10 w-25 p-1 text-[13px] flex justify-center font-bold mb-5' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>WHO WE ARE</p>
                    <h1 className='mb-10 text-[60px] font-semibold leading-none' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>WE HAVE BEEN <br /> MOTIVATING POEPLE TO <br /> CYCLE SINCE 1983</h1>
                    <p className='text-gray-700 text-[15px]'>At RideOn, we’ve been sharing your passion for cycling for more than <br /> 110 years, constantly motivated by our drive for innovation, <br /> employees who love their jobs and a invaluable wealth of experience.<br /> In all our actions on- and offline, we stand for expertise in cycling,<br /> lifestyle, design and high-end technology, but also and above all, we <br /> stand for what connects us all: Our love for bicycles.</p>
                    <div className='flex bg-white w-300 justify-between absolute left-100 bottom-[-530px] p-15'>
                        <div className='flex gap-5 items-start'>
                            <img src={bike} width={50} />
                            <div>
                                <p className='mb-2 text-[19px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>BIKE FITTING & DELIVERY</p>
                                <p className='text-gray-700'>We believe in the power of truth, <br /> authenticity, and transparency. <br /> The care and time we invest into <br /> each piece is the guarantee that <br /> the next owner will receive a <br /> superior product.</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-start'>
                            <img src={accessories} width={50} />
                            <div>
                                <p className='mb-2 text-[19px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>CUSTOM PARTS & ACCESSORIES</p>
                                <p className='text-gray-700'>We are an epic team that faces <br /> challenges every day and believes <br /> in its vision. We support each <br /> other, we race together and we <br /> honestly have a lot of fun at it.</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-start'>
                            <img src={gear} width={50} />
                            <div>
                                <p className='mb-2 text-[19px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>COMPLETE OVERHAUL</p>
                                <p className='text-gray-700'>We push ourselves and each other <br /> beyond our limits, and we are not <br /> afraid to make mistakes. We never <br /> stop learning, growing and <br /> disrupting pre-established <br /> schemes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mb-20'>
                <div className='bg-black w-380 h-70 flex justify-center items-center'>
                    <div className='flex justify-center gap-40'>
                        <div className='relative flex flex-col'>
                            <p className='text-[80px] text-white z-10 font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>25</p>
                            <div style={{backgroundColor: 'var(--background-color, #FFDB00)'}} className='w-17 h-5 absolute top-[75px]'></div>
                            <p className='text-white mt-[-15px] text-[20px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>YEARS IN BUSINESS</p>
                        </div>
                        <div className='relative flex flex-col'>
                            <p className='text-[80px] text-white z-10 font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>75+</p>
                            <div style={{backgroundColor: 'var(--background-color, #FFDB00)'}} className='w-25 h-5 absolute top-[75px]'></div>
                            <p className='text-white mt-[-15px] text-[20px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>WORLDWIDE STORES</p>
                        </div>
                        <div>
                            <div className='relative flex flex-col'>
                                <p className='text-[80px] text-white z-10 font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>189K</p>
                                <div style={{backgroundColor: 'var(--background-color, #FFDB00)'}} className='w-33 h-5 absolute top-[75px]'></div>
                            </div>
                            <p className='text-white mt-[-15px] text-[20px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>ACTIVE RIDERS</p>
                        </div>
                        <div className='relative flex flex-col'>
                            <p className='text-[80px] text-white z-10 font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>98%</p>
                            <div style={{backgroundColor: 'var(--background-color, #FFDB00)'}} className='w-33 h-5 absolute top-[75px]'></div>
                            <p className='text-white mt-[-15px] text-[20px] font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>SATISFIED CUSTOMERS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-20'>
                <p className='mt-10 w-20 p-1 text-[13px] flex justify-center font-bold mb-5' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>WHY US</p>
                <p className='mb-10 text-[60px] font-semibold leading-none' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>RELIABLE SERVICE & <br /> SUPPORT</p>
            </div>
            <div className='flex justify-center items-center mb-15'>
                <div className='flex flex-col gap-15 border border-gray-300 p-15'>
                    <div className='w-15 h-15 flex justify-center items-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>
                        <img src={check} width={20} />
                    </div>
                    <div>
                        <p className='text-[20px] font-semibold mb-2' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>PRICING</p>
                        <p className='text-gray-700'>We work closely with our suppliers to <br /> be able to offer you the best deals on <br /> all the brands we stock.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-15 border border-gray-300 p-15 h-[352px]' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>
                    <div className='w-15 h-15 flex justify-center items-center bg-white'>
                        <img src={check} width={20} />
                    </div>
                    <div>
                        <p className='text-[20px] font-semibold mb-2' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>QUALITY</p>
                        <p className='text-gray-700'>We buy bulk quantities of bikes and <br /> accessories and stock over 1000 bikes</p>
                    </div>
                </div>
                <div className='flex flex-col gap-15 border border-gray-300 p-15'>
                    <div className='w-15 h-15 flex justify-center items-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>
                        <img src={check} width={20} />
                    </div>
                    <div>
                        <p className='text-[20px] font-semibold mb-2' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>PERFORMANCE</p>
                        <p className='text-gray-700'>We cater for all styles of cycling and <br /> thousands of accessories to perfectly <br /> tailor to your cycling experience.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-15 border border-gray-300 p-15 h-[352px]'>
                    <div className='w-15 h-15 flex justify-center items-center' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>
                        <img src={check} width={20} />
                    </div>
                    <div>
                        <p className='text-[20px] font-semibold mb-2' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>CUSTOMERS</p>
                        <p className='text-gray-700'>We provide all of our customers with <br /> fast and reliable service</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mb-15'>
                <img src={photo} />
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center border border-gray-300 w-192 h-120'>
                    <img src={icon2} className='w-20' />
                    <p className='mt-10 w-21 p-1 text-[13px] flex justify-center font-bold mb-5' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>NEED HELP</p>
                    <p style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className='text-[40px] font-semibold mb-3'>PURCHASE GUIDANCE</p>
                    <p className='text-center text-gray-700 mb-5'>Our mission is to provide access to the world’s most desired <br /> bikes in the smartest way.</p>
                    <button className='border text-[15px] w-40 p-2'>LEARN MORE</button>
                </div>
                <div className='flex flex-col justify-center items-center border border-gray-300 w-192 h-120'>
                    <img src={icon} className='w-20' />
                    <p className='mt-10 w-35 p-1 text-[13px] flex justify-center font-bold mb-5' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}>CUSTOMER SERVICE</p>
                    <p style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className='text-[40px] font-semibold mb-3'>MECHANICAL SUPPORT</p>
                    <p className='text-center text-gray-700 mb-5'>Manuals can be found either here or under Technical Overview – <br /> Technical Details & Manuals</p>
                    <button className='border text-[15px] w-40 p-2'>LEARN MORE</button>
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


export default About;