import { useEffect, useState } from 'react';

import mainBackground1 from '../RideOn Images/10001.jpg';
import mainBackground2 from '../RideOn Images/10003.jpg';
import mainBackground3 from '../RideOn Images/10005.jpg';

import bike1 from '../RideOn Images/10002.png';
import bike2 from '../RideOn Images/10004.png';
import bike3 from '../RideOn Images/10006.png';
import image1 from '../RideOn Images/10034.jpg';
import image2 from '../RideOn Images/10035.jpg';
import image3 from '../RideOn Images/10036.jpg';
import image4 from '../RideOn Images/10037.jpg';
import image5 from '../RideOn Images/10038.jpg';

import aero from '../RideOn Images/10001.svg';
import kaway from '../RideOn Images/10002.svg';
import jestter from '../RideOn Images/10003.svg';
import enova from '../RideOn Images/10004.svg';
import rotor from '../RideOn Images/10005.svg';

import ride from '../RideOn Images/10039.jpg';

import shopProduct1 from '../RideOn Images/10040.jpg';
import shopProduct2 from '../RideOn Images/10041.jpg';
import shopProduct3 from '../RideOn Images/10042.jpg';
import shopProduct4 from '../RideOn Images/10043.jpg';

import dontMissOutPhoto from '../RideOn Images/10045.jpg';

import electronicBikesImage from '../RideOn Images/10044.jpg';

import parts from '../RideOn Images/10028.jpg';
import clothing from '../RideOn Images/10029.jpg';
import helmets from '../RideOn Images/10030.jpg';
import accessories from '../RideOn Images/10031.jpg';

import emailLogo from '../RideOn Images/email.webp';
import call from '../RideOn Images/Call (2).png';
import facebook from '../RideOn Images/Facebook circle.svg';
import twitter from '../RideOn Images/Twitter alt.svg';
import instagram from '../RideOn Images/Instagram icon.svg';
import pinterest from '../RideOn Images/Pinterest p.svg';
import youtube from '../RideOn Images/Youtube filled.svg';
import cards from '../RideOn Images/10048.png';

import { useNavigate } from 'react-router';
import Bikes from './Bikes';
import { useBikes } from '../context/BikeContext';

const Home = () => {
    const [bikeIndex, setBikeIndex] = useState(0);
    const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
    const [animation, setAnimation] = useState('rollIn');
    const { getHeroBikes, heroSectionBikes, getFeaturedBikes, heroSectionFeatured } = useBikes();
    const navigate = useNavigate();


    useEffect(() => {
        getHeroBikes();
        getFeaturedBikes();
    }, []);

    const bikesArr = [
        {
            image: bike1,
            text: <>
                <p className='text-xl font-bold text-white' style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>ARE YOU READY</p><h1 style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className='text-[140px] text-center font-bold text-white'><span className='block mb-[-40px]'>RIDE</span><span className='italic font-light'>IN</span> STYLE</h1>
            </>
        }, 
        {
            image: bike2,
            text:
            <>
               <p className='text-xl font-bold text-white' style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>WE HELP YOU PICK</p><h1 style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className='text-[140px] text-center font-bold text-white'><span className='block mb-[-40px]'>POWER</span><span className='italic font-light'>YOUR</span> ADVENTURE</h1>
            </>
        }, {
            image: bike3,
            text: <>
                <p className='text-xl font-bold text-white' style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>START YOUR OWN</p><h1 style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}} className='text-[140px] text-center font-bold text-white'><span className='block mb-[-60px]'>MAKE</span><span className='italic font-light'>EVERY</span> RIDE</h1>
            </>
        }];
    const backgroundImages = [mainBackground1, mainBackground2, mainBackground3];

    useEffect(() => {
        let timeout1, timeout2;

        const cycle = () => {
            setAnimation('rollIn');

            timeout1 = setTimeout(() => {
                setAnimation('');

                timeout2 = setTimeout(() => {
                    setAnimation('rollOut');

                    setTimeout(() => {
                        setBikeIndex((prev) => (prev + 1) % bikesArr.length);

                        setBackgroundImageIndex((prev) => (prev + 1) % backgroundImages.length);

                        cycle();
                    }, 1000)
                }, 4000);
            }, 1000);
        }

        cycle();

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        }
    }, []);

    return (
        <>
           <div className='flex flex-col justify-center items-center overflow-hidden mb-20' style={{ backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`, backgroundRepeat: 'no-repeat' }}>
                <div className='text-center pt-10 animate-slideInLeft leading-tight'>
                    {bikesArr[bikeIndex].text}
                </div>
                <img src={bikesArr[bikeIndex].image} width={1205} className={`${animation} z-10 mt-[-220px]`} />
           </div>

            <div className='flex justify-center gap-7 mb-15'>
                <div className='w-57 h-57 rounded-full flex justify-center items-center duration-300' style={{backgroundImage: `url(${image1})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay'}} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 2)'} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'}>
                    <img src={aero} />
                </div>
                <div className='w-57 h-57 rounded-full flex justify-center items-center duration-300' style={{backgroundImage: `url(${image2})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay'}} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 2)'} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'}>
                    <img src={kaway} />
                </div>
                <div className='w-57 h-57 rounded-full flex justify-center items-center duration-300' style={{backgroundImage: `url(${image3})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay'}} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 2)'} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'}>
                    <img src={jestter} />
                </div>
                <div className='w-57 h-57 rounded-full flex justify-center items-center duration-300' style={{backgroundImage: `url(${image4})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay'}} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 2)'} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'}>
                    <img src={enova} />
                </div>
                <div className='w-57 h-57 rounded-full flex justify-center items-center duration-300' style={{backgroundImage: `url(${image5})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay'}} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 1)'} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'}>
                    <img src={rotor} />
                </div>
                <div className='bg-red-600 w-57 rounded-full flex justify-center items-center text-[13px] font-medium duration-300' onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 1)'} onMouseLeave={(e) => e.target.style.backgroundColor='#E7000B'}>
                    <p className='text-white'>SHOP ALL BRANDS</p>
                </div>
            </div>

            <hr className='w-full border-gray-300' />

            <div className='flex justify-between items-start w-full mb-20'>
                <div className='flex flex-col w-full'>
                    {heroSectionBikes.map((bike) => (
                        <div key={bike._id}>  
                            <div className='flex flex-col items-center justify-center h-[510px]' onClick={() => navigate(`/bikes/${bike._id}`)}>
                                <img src={bike.images[0]} width={500} />
                                <p className='text-gray-500'>{bike.type}</p>
                                <p className='text-xl font-bold' style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>{bike.name}</p>
                                <p style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className='mb-5'>${bike.price}</p>
                            </div>
                            <hr className='w-full border-gray-300' />
                        </div>
                    ))}
                </div>

                <div className='w-[1700px] h-[1021px] flex justify-center items-center' style={{ backgroundImage: `url(${ride})`, backgroundColor: 'rgba(0, 0, 0, 0.3)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                    <div className='w-4 h-4 ml-6' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}></div>
                    <h1 className='text-6xl text-white font-bold mt-5 pl-3' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>ROAD BIKES</h1>
                </div>
            </div>
            <div className='flex gap-7 justify-center mb-20'>
                <div className='relative flex justify-center' onClick={() => navigate(`/shop`)}>
                    <div className='absolute text-center mt-15'>
                        <p className='text-xl font-semibold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', color: 'var(--text-color, #9E9E9E)'}}>LONG SLEEVE JERSEY</p>
                        <p className='text-[55px] font-bold text-red-500' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}>GET <span className='text-black font-normal text-6xl italic pr-2' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>20$</span> OFF</p>
                        <p className='text-[20px] font-normal mb-5' style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif', color: 'var(--text-color, #9E9E9E)'}}>when you spend $100+ on<br />cycling clothing</p>
                        <button className='border p-2 w-35 text-[14px]'>SHOP NOW</button>
                    </div>
                    <img src={shopProduct1} />
                </div>
                <div className='flex flex-col gap-7'>
                    <div className='flex'>
                        <div className='flex gap-7'>
                            <div className='relative' onClick={() => navigate(`/shop`)}>
                                <div className='absolute right-10 top-10'>
                                    <p className='text-[16px] font-semibold ml-28' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', color: 'var(--text-color, #9E9E9E)'}}>URBAN BIKES</p>
                                    <p className='text-[50px] font-semibold mb-15 leading-none' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)' }}><span className='pl-27 block'>FIND</span><span className='text-black font-normal text-6xl italic pr-2' style={{fontFamily: 'var( --font-family3, "Smooch Sans", sans-serif)'}}>YOUR</span> FAST</p>

                                    <div style={{backgroundColor: 'var(--background-color2, #FFA824)'}} className='w-30 h-30 rounded-full flex justify-center items-center ml-20'>
                                        <p style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif'}} className='italic text-3xl text-white font-light'>BEST <br /> DEAL</p>
                                    </div>
                                </div>
                                <img src={shopProduct2} />
                            </div>
                            <div className='relative' onClick={() => navigate(`/shop`)}>
                                <div className='absolute right-10 top-40'>
                                    <p className='text-[50px] font-semibold leading-none' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)'}}><span className='ml-10 block'>LIGHT</span><span className='text-black font-light text-6xl italic'>SADDLE</span><span className='ml-20 block'>BAG</span></p>
                                    <p className='text-[16px] font-bold ml-20' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', color: 'var(--text-color, #9E9E9E)'}}>SALE PRICE</p>
                                    <p style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', color: 'var(--price-color, #00B67A)'}} className='font-bold ml-18 flex items-start mt-2'><span className='self-end text-4xl'>$59.</span><span className='text-2xl'>99</span></p>
                                </div>
                                <img src={shopProduct3} />
                            </div>
                        </div>
                    </div>
                    <div className='relative' onClick={() => navigate(`/shop`)}>
                        <div className='absolute flex flex-col bottom-10 left-12'>
                            <p className='text-[17px] font-bold' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)', color: 'var(--text-color, #9E9E9E)'}}>OVERVOLT TR 3.5</p>
                            <p style={{color: 'var(--text-color2, #5F7C9F)', fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif'}} className='text-5xl font-semibold mb-5'><span className='text-black font-light text-6xl italic' style={{fontFamily: 'var(--font-family2, "Barlow Condensed", sans-serif)' }}>EXCITE</span><br /> YOUR RIDE</p>
                            <button className='border p-2 w-35 text-[14px]'>SHOP NOW</button>
                        </div>
                        <img src={shopProduct4} />
                    </div>
                </div>
            </div>
            <hr className='w-full border-gray-300' />
            <div className='flex justify-between items-start w-full mb-20'>
                <div className='w-[1700px] h-[1021px] flex justify-center items-center' style={{ backgroundImage: `url(${electronicBikesImage})`, backgroundColor: 'rgba(0, 0, 0, 0.3)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}}>
                    <div className='w-4 h-4 ml-6' style={{backgroundColor: 'var(--background-color, #FFDB00)'}}></div>
                    <h1 className='text-6xl text-white font-bold mt-5 pl-3' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>ELECTRONIC BIKES</h1>
                </div>

                <div className='flex flex-col w-full'>
                    {heroSectionFeatured.map((bike) => (
                        <div key={bike._id}>  
                            <div className='flex flex-col items-center justify-center h-[510px]' onClick={() => navigate(`/bikes/${bike._id}`)}>
                                <img src={bike.images[0]} width={500} />
                                <p className='text-gray-500'>{bike.type}</p>
                                <p className='text-xl font-bold' style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>{bike.name}</p>
                                <p style={{fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}} className='mb-5'>${bike.price}</p>
                            </div>
                            <hr className='w-full border-gray-300' />
                        </div>
                    ))}
                </div>
            </div>
            <>
                <div className='flex flex-wrap gap-5 justify-center items-center mb-20' style={{maxWidth: '1800px'}}>
                    <Bikes />
                </div>
                <hr className='w-full border-gray-300' />
            </>
            <>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col justify-center items-center w-234'>
                        <div className='w-40 flex justify-center items-center'>
                            <p className='text-[15px] font-semibold p-2 mb-5' style={{backgroundColor: 'var(--background-color, #FFDB00)', fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>DON'T MISS OUT</p>
                        </div>
                        <p className='text-center text-[60px] font-bold leading-none mb-10' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>GET <span className='text-red-500'>25% OFF</span> NEXT <br /> PURCHASE</p>
                        <form>
                            <div className='flex justify-center items-center mb-5'>
                                <input className='bg-gray-100 h-[52px] w-[317px] pl-5' type='email' name='email' placeholder='Enter email address...' required />
                                <button className='w-[160px] h-[52px] text-[15px]' style={{backgroundColor: 'var(--background-color, #FFDB00)', fontFamily: 'var(--font-family, "Roboto Condensed", sans-serif)'}}>SUBSCRIBE</button>
                            </div>
                        </form>
                        <p className='text-[14px] text-gray-400'>* By subscribing you agree to receive communications from us.</p>
                    </div>

                    <div>
                        <img src={dontMissOutPhoto} />
                    </div>
                </div>
                <hr className='w-full border-gray-300 mb-20' />
            </>
            <div className='flex justify-center items-center gap-7 mb-20'>
                <div className='group w-[340px] h-[438px] duration-400  flex justify-center items-center' style={{ backgroundImage: `url(${parts})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.1)'} onClick={() => navigate(`/shop`)}>
                    <div className='flex flex-col leading-[0.7]'>
                        <p className='text-white text-[50px] font-semibold transition-transform duration-400 group-hover:translate-y-5.5' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>PARTS</p>
                        <p className='text-transparent text-[50px] transition-transform duration-400 font-semibold group-hover:-translate-y-3.5 stroke-white fill' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>PARTS</p>
                    </div>
                </div>
                <div  className='group w-[340px] h-[438px] duration-400 flex justify-center items-center' style={{ backgroundImage: `url(${clothing})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.1)'} onClick={() => navigate(`/shop`)}>
                    <div className='flex flex-col leading-[0.7]'>
                        <p className='text-white text-[50px] font-semibold transition-transform duration-400 group-hover:translate-y-5.5' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>CLOTHING</p>
                        <p className='text-transparent text-[50px] transition-transform duration-400 font-semibold group-hover:-translate-y-3.5 stroke-white fill' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>CLOTHING</p>
                    </div>
                </div>
                <div className='group w-[340px] h-[438px] duration-400 flex justify-center items-center' style={{ backgroundImage: `url(${helmets})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.1)'} onClick={() => navigate(`/shop`)}>
                    <div className='flex flex-col leading-[0.7]'>
                        <p className='text-white text-[50px] font-semibold transition-transform duration-400 group-hover:translate-y-5.5' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>HELMETS</p>
                        <p className='text-transparent text-[50px] transition-transform duration-400 font-semibold group-hover:-translate-y-3.5 stroke-white fill' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>HELMETS</p>
                    </div>
                </div>
                <div className='group w-[340px] h-[438px] flex justify-center items-center duration-400' style={{ backgroundImage: `url(${accessories})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'overlay', backgroundSize: 'cover'}} onMouseLeave={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.5)'} onMouseEnter={(e) => e.target.style.backgroundColor='rgba(0, 0, 0, 0.1)'} onClick={() => navigate(`/shop`)}>
                    <div className='flex flex-col leading-[0.7]'>
                        <p className='text-white text-[50px] font-semibold transition-transform duration-400 group-hover:translate-y-5.5' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>ACCESSORIES</p>
                        <p className='text-transparent text-[50px] transition-transform duration-400 font-semibold group-hover:-translate-y-3.5 stroke-white fill' style={{fontFamily: 'var(--font-family3, "Smooch Sans", sans-serif)'}}>ACCESSORIES</p>
                    </div>
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

export default Home;